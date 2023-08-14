# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Solution Architecture Design

### Folder Structure

#### src/

This your code based and determined the quality and the structure my guidance is based off my experiences.

#### src/*/__tests__

Tests should be nested next to the code they are responsible for

#### src/assets

Contain static assets for the solution logo, favicon, and etc

#### src/components

This are shared "KISS/Element" components that are reused in multiple features usually don't contain state. Data in and render State should be handled at feature level.

#### src/components/layout

These are reused in features resulting in an in a completed section of a page. Usually comprised  of 

#### src/context

Houses the global contexts for the projects. This folder name can be found under a feature folder as well.

#### src/data

Place all .json, config values, constants and any information that isnt going to change.

#### src/features

Most of developeed will reside in this folder, WTF is a feature? They are the Single focused building blocks of pages of your solution. 

- Should be named as a plural item, "projects", "users", "authentications", "settings"

Each feature should contain sub dirs not limited to what is listed below, based on the needs of feature if it is not need then don't add it.  

"feature"
   assets
   components
   hooks
   services
   index.js

#### src/pages

- One UI for each area of of concern. No nesting in a folder structure

#### src/lib

 - 3rd party libs should be a implementation of facade pattern wrap 3rd party libs create a shell around the dependency.

#### src/services

- These will communicate with the facades found in lib folder

#### src/utils

 This houses all Small simple utility pure functions, formatting strings, dates, and etc.

### Add testing 

https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f

### Extend linters

https://www.youtube.com/watch?v=cchqeWY0Nak
