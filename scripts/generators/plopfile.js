const PROJECT_ROOT = `../..`

const plopTemplates = `${PROJECT_ROOT}/scripts/generators/templates`

const projectSrc = `${PROJECT_ROOT}/src`

/**
 *
 * @param {string} basePath
 */
const addInjectableIndexAction = (basePath) => {
  return {
    type: "add",
    path: `${basePath}/index.ts`,
    templateFile: `${plopTemplates}/injectableIndex.ts.hbs`,
    skipIfExists: true,
  }
}

/**
 *
 * @param {string} basePath
 * @param {string} name
 * @param {string} casing
 */
const addImportAction = (basePath, name, casing) => {
  return {
    type: "append",
    path: `${basePath}/index.ts`,
    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `import {{${casing} ${name}}} from "./{{${casing} ${name}}}"`,
  }
}

/**
 *
 * @param {string} basePath
 * @param {string} name
 * @param {string} casing
 */
const addExportAction = (basePath, name, casing) => {
  return {
    type: "append",
    path: `${basePath}/index.ts`,
    pattern: `/* PLOP_INJECT_EXPORT */`,
    template: `\t{{${casing} ${name}}},`,
  }
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
  actions() {
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
    actions.push(addInjectableIndexAction(featuresPath, "name", "camelCase"))

    // Add modules to `Features/index.ts`
    actions.push({
      type: "append",
      path: `${featuresPath}/index.ts`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import * as {{camelCase name}} from "./{{camelCase name}}"`,
    })

    actions.push(addExportAction(featuresPath, "name", "camelCase"))
  },
}

const generateHelper = {
  description: "Create a new helper",
  prompts: [
    { type: "input", name: "name", message: "What is the name of the helper?" },
    { type: "confirm", name: "includeTest", message: "Include test?" },
  ],
  actions(data) {
    const actions = []

    const helperPath = `${projectSrc}/Helpers`

    actions.push({
      type: "add",
      path: `${helperPath}/{{camelCase name}}.ts`,
      templateFile: `${plopTemplates}/Helper/Helper.ts.hbs`,
    })

    if (data.includeTest) {
      actions.push({
        type: "add",
        path: `${helperPath}/{{camelCase name}}.test.ts`,
        templateFile: `${plopTemplates}/Helper/Helper.test.ts.hbs`,
        default: false,
      })
    }

    actions.push({
      type: "add",
      path: `${helperPath}/index.ts`,
      templateFile: `${plopTemplates}/Helper/index.ts.hbs`,
    })

    // Create `Helpers/index.ts` (if it doesn't exist)
    actions.push(addInjectableIndexAction(helperPath, "name", "camelCase"))

    // Add modules to `Helpers/index.ts`
    actions.push(addImportAction(helperPath, "name", "camelCase"))
    actions.push(addExportAction(helperPath, "name", "camelCase"))

    return actions
  },
}

const generateStyleComponent = {
  description: "Generate new component for theme-ui",
  prompts: [
    { type: "input", name: "name", message: "What is the component name?" },
  ],
  actions() {
    const actions = []

    const styleComponentPath = `${projectSrc}/Styles/components`

    actions.push({
      type: "add",
      path: `${styleComponentPath}/{{camelCase name}}.ts`,
      templateFile: `${plopTemplates}/Component/styleComponent.ts.hbs`,
    })

    // Create `Styles/components/index.ts` (if it doesn't exist)
    actions.push(
      addInjectableIndexAction(styleComponentPath, "name", "camelCase"),
    )

    // Add modules to `Styles/components/index.ts`
    actions.push(addImportAction(styleComponentPath, "name", "camelCase"))
    actions.push(addExportAction(styleComponentPath, "name", "camelCase"))

    return actions
  },
}

const generateComponent = {
  description: "Create a reusable component",
  prompts: [
    { type: "input", name: "name", message: "What is the component name?" },
    {
      type: "confirm",
      name: "wantView",
      message: "Include view component?",
    },
    {
      type: "confirm",
      name: "wantContainer",
      message: "Include container?",
    },
    {
      type: "confirm",
      name: "wantStyle",
      message: "Include theme-ui component?",
    },
  ],
  actions(data) {
    const actions = []

    // Guard clause
    if (!data.wantView && !data.wantContainer && !data.wantStyle) {
      return actions
    }

    const componentPath = `${projectSrc}/Components`

    if (data.wantView) {
      actions.push({
        type: "add",
        path: `${componentPath}/{{pascalCase name}}/{{pascalCase name}}.view.tsx`,
        templateFile: `${plopTemplates}/Component/Component.view.tsx.hbs`,
      })
    }

    if (data.wantContainer) {
      actions.push({
        type: "add",
        path: `${componentPath}/{{pascalCase name}}/{{pascalCase name}}.container.tsx`,
        templateFile: `${plopTemplates}/Component/Component.container.tsx.hbs`,
        data: {
          isLinkedWithView: data.wantView && data.wantContainer,
        },
      })
    }

    actions.push({
      type: "add",
      path: `${componentPath}/{{pascalCase name}}/index.ts`,
      templateFile: `${plopTemplates}/Component/index.ts.hbs`,
      data: {
        wantContainer: data.wantContainer,
      },
    })

    if (data.wantStyle) {
      const styleComponentPath = `${projectSrc}/Styles/components`

      actions.push({
        type: "add",
        path: `${styleComponentPath}/{{camelCase name}}.ts`,
        templateFile: `${plopTemplates}/Component/styleComponent.ts.hbs`,
      })

      // Create `Styles/components/index.ts` (if it doesn't exist)
      actions.push(
        addInjectableIndexAction(styleComponentPath, "name", "camelCase"),
      )

      // Add modules to `Styles/components/index.ts`
      actions.push(addImportAction(styleComponentPath, "name", "camelCase"))
      actions.push(addExportAction(styleComponentPath, "name", "camelCase"))
    }

    // Create `Components/index.ts` (if it doesn't exist)
    actions.push(addInjectableIndexAction(componentPath, "name", "pascalCase"))

    // Add modules to `Components/index.ts`
    actions.push(addImportAction(componentPath, "name", "pascalCase"))
    actions.push(addExportAction(componentPath, "name", "pascalCase"))

    return actions
  },
}

module.exports = (plop) => {
  plop.setGenerator("component", generateComponent)
  plop.setGenerator("feature", generateFeature)
  plop.setGenerator("helper", generateHelper)
  plop.setGenerator("theme-ui component", generateStyleComponent)
}
