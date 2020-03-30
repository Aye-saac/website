const PROJECT_ROOT = `../..`

const plopTemplates = `${PROJECT_ROOT}/scripts/generators/templates`

const projectSrc = `${PROJECT_ROOT}/src`

/**
 *
 * @param {string} basePath
 */
const addInjectableIndexAction = (basePath) => {
  return [
    {
      type: "add",
      path: `${basePath}/index.ts`,
      templateFile: `${plopTemplates}/injectableIndex.ts.hbs`,
      skipIfExists: true,
    },
  ]
}

const generateFeature = {
  description: `Create a feature`,
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the feature called?",
    },
  ],
  actions(data) {
    const actions = []

    const featuresPath = `${projectSrc}/Features`

    actions.push({
      type: "add",
      path: `${featuresPath}/{{camelCase name}}/{{camelCase name}}Slice.ts`,
      templateFile: `${plopTemplates}/Feature/Feature.ts.hbs`,
    })

    actions.push({
      type: "add",
      path: `${featuresPath}/{{camelCase name}}/index.ts`,
      templateFile: `${plopTemplates}/Feature/index.ts.hbs`,
    })

    // Create `Features/index.ts` (if it doesn't exist)
    actions.push(addInjectableIndexAction(featuresPath, data.name, "camelCase"))

    // Add modules to `Features/index.ts`
    actions.push({
      type: "append",
      path: `${featuresPath}/index.ts`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import * as {{camelCase name}} from "./{{camelCase name}}"`,
    })

    actions.push({
      type: "append",
      path: `${featuresPath}/index.ts`,
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{camelCase name}},`,
    })
  },
}

export default (plop) => {
  plop.setGenerator("feature", generateFeature)
}
