# Ayesaac: Website

Description goes here.

## Development

### Installing things

#### Prerequisites

1. Install the **LTS version** of [Node.js](https://nodejs.org/en/).
1. Install [Yarn](https://yarnpkg.com/en/docs/install).

#### Dependencies

1. Clone the repository
2. Navigate to the folder
3. Run `yarn` to install the dependencies
4. Run `yarn start` to start the development server.

### Available Scripts

In the project directory, you can run:

- `yarn start` - Runs the app in the development mode at [http://localhost:3000](http://localhost:3000).
- `yarn test` - Launches the test runner in the interactive watch mode.
- `yarn build` - Builds production version to `build` folder, optimising for best performance. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- `yarn lint` - Lints project files.
- `yarn fix` - Same as `yarn lint`, but also fixes errors where possible.
- `yarn generate` - Scaffold files for quicker development.

There are more scripts that are not listed above. The full list of scripts are within the `package.json` file.

## Technology stack

### Dependencies

- Built utilising [React](https://reactjs.org/) with [TypeScript (TS)](http://www.typescriptlang.org/)
- State management with [Redux](https://redux.js.org/) through [Redux Toolkit (RTK)](https://redux-toolkit.js.org/)
- Page routing with [React Router](https://github.com/ReactTraining/react-router)
- Bootstrapped using [Create React App (CRA)](https://create-react-app.dev/) with [cra-template-typescript-redux](https://github.com/alexandr-g/cra-template-typescript-redux)
- Styling with CSS-in-JSS with [Theme UI](https://theme-ui.com/) (with [Emotion](https://emotion.sh/))
- Normalize CSS with [normalize.css](https://github.com/necolas/normalize.css/)
- Font used: [Inter](https://rsms.me/inter/)
- Icons used: [Feather](https://feathericons.com/) through [React Icons](https://github.com/react-icons/react-icons)

### Developer dependencies

- Testing with [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/)
- Code formatting with [Prettier](https://prettier.io/)
- Code linting with [ESLint](https://eslint.org/)
- Easier file scaffolding with [plop](https://plopjs.com/)

### Yarn (v2)

[Yarn](https://yarnpkg.com/en/) was used during development, which is why there is a `yarn.lock` file instead of a `package-lock.json` file. Ultimately [use whatever you're comfortable with, but know the differences](https://yarnpkg.com/lang/en/docs/migrating-from-npm/).

I've used Yarn v2 for this project, but I have **not used PnP** — I kept coming across issues during setup so I am using Yarn v2 with the [`node-modules`](https://yarnpkg.com/advanced/migration#if-required-enable-the-node-modules-plugin) plugin.

### Aliased imports

I get annoyed at seeing loads of relative importing paths, so absolute import aliasing has been used. This is why there are capital letters used for the immediate directory under `src/`.

### Redux configuration

The template provides basic Redux configuration with [feature based](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks) folder structure. You can use [Redux devtools browser extension](http://extension.remotedev.io/). Based on Redux maintainers recommendation.
