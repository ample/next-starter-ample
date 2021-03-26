# Ample's Next.js Starter

_Clone repo_

```shell
git clone git@github.com:ample/next-starter-ample.git
```

```shell
cd next-starter-ample
```

#### Install NVM, if needed

> [zsh](https://github.com/lukechilds/zsh-nvm) or [bash](https://github.com/creationix/nvm#installation)

_Install Node_

```shell
nvm install 15
```

_Install node packages_

```shell
yarn
```

_Start the development server ([http://localhost:3000](http://localhost:3000))_

```shell
yarn run develop
```

## Storybook

This starter uses [Storybook](https://storybook.js.org/) for documentation, development, and visual testing. To start the server in development, run the `storybook` command:

```shell
yarn run storybook
```

This will launch a browser at localhost:6006, running storybook. Documentation specific to this project can be found in Storybook.

## Linters

It's recommended to set up seamless integration with your editor.

- [ESLint](http://eslint.org/) statically analyzes your code to quickly find problems in JavaScript. ([editor-integration](http://eslint.org/docs/user-guide/integrations#editors))
- [Stylelint](https://stylelint.io) helps avoid errors and enforces conventions in styles. ([editor-integration](https://stylelint.io/user-guide/complementary-tools/#editor-plugins)\)

> Note: _When using VS Code most ESLint and Stylelint conventions will be fixed automatically._

Run `yarn run lint` to ensure there are no linter errors or warnings before committing.
