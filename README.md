# FRONTEND BOILERPLATE

<p>Model to be followed for our frontend projects</p>
<p>Created at: 24/01/2023</p>

# Getting Started

#### Pass 1

```
yarn install
```

#### Pass 2

```
yarn dev
```

# Folder architecture

```
├─ src
│ ├─ components
│ ├─ hooks
│ ├─ layouts 
│ ├─ pages
│ ├─ public
│ ├─ routes
│ ├─ services
│ ├─ styles
│ ├─ testConfig
│ ├─ translate
│ ├─ utils
│ ├─ app.tsx
│ ├─ main.tsx
│ ├─ vite-env.d.ts
├─ README.md
├─ CHANGELOG.md
├─ ROADMAP.md
├─ .nvmrc/.asdf
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.cjs
├─ plopfile.js
├─ .vitest.config.ts
├─ .vitest.setup.ts
├─ .vite.config.ts
├─ .gitignore
├─ .prettierrc
└─ tsconfig.json
```

# Functions of each folder and files

* **COMPONENTS**: Used to store reusable components.
* **HOOKS**: Used to store custom Hooks in projects.
* **LAYOUTS**: Used to store files related to the layout or structure of the user interface.
* **PAGES**: Used to organize components or files related to specific pages of the application.
* **PUBLIC**: Used to store static resources that do not undergo any specific processing during project construction.
* **ROUTES**: Used to organize files or modules related to the definition of application routes.
* **SERVICES**: Used to store modules or classes responsible for interactions with external services.
* **STYLES**: Used to store theme files and global style reset.
* **TRANSLATE**: Used to store global tanslations settings.
* **TESTE CONFIG**: Used to store global test settings.
* **UTILS**: Used to store functions, classes, or modules that contain reusable or utility logic.
* **APP.tsx**: Used to define the main component of the application. This component can include the overall structure of the application, handle routing, and incorporate other components as needed.
* **MAIN.tsx**: It is the file that renders the main component of the application on the HTML page.

# Standardization

## Component / Pages

<p>To create components or pages, organization is based on the division of logic, rendering, style and testing responsibilities that follows the following structure:</p>

### Structure

```
{{component/page-name}}.template.tsx
{{component/page-name}}.template.spec.ts
{{component/page-name}}.component.tsx
{{component/page-name}}.component.spec.ts
{{component/page-name}}.translations.ts
{{component/page-name}}.style.ts
{{component/page-name}}.types.ts
```

### Functions of each file

* **.template**: Responsible for rendering.
* **.template.spec**: Responsible for rendering testing.
* **.component**: Responsible for logic.
* **.component.spec**: Responsible for logic testing.
* **.translations**: Responsible for components/pages translations.
* **.style**: Responsible for style.
* **.types**: Responsible for typing.

### Nomenclature

<p>The standardization of nomenclature for components and pages follows the following format:</p>

> first part of the name will be the file type - second part of the name will be the file name

#### Component

```
{{component-name}}
```

#### Page

```
{{page-name}}
```

### Command line

<p>To facilitate the construction of these components/pages, you can run the following command:</p>

#### Pass 1

```
yarn generate component
```

#### Pass 2

```
What is your component name? {{ WRITE COMPONENT NAME }}
```

#### Pass 3

```
What is your file name? {{ CHOOSE THE COMPONENT FOLDER OR PAGE }}
```

<p>Following these steps create a component/page with all the files.</p>

## Translate

### Structure

```
index.ts
translations-en.ts
translations-pt.ts
translations.commons.ts
translations.config.ts
translations.types.ts
```

### Functions of each file

* **.translations-en**: Responsible for putting together the en-US translations
* **.translations-pt**: Responsible for putting together the pt-BR translations
* **.commons**: Responsible for commons application translations
* **.config**: Responsible for config the translation provider
* **.types**: Responsible for typing.

## Hooks

### Structure

```
├─ useHookExemple
│ ├─ index.ts
```

### Nomenclature

<p>The standardization of nomenclature for hooke follows the following format:</p>

### Folder

```
use{{ hook name in camelcase }}
```

#### Index.ts

```
use{{ hook name in camelcase }}() {
  return {}
}
```

> first part of the name will be the file type - second part of the name will be the file name

### Command line

#### Pass 1

npm

```
npm generate hook
```

yarn

```
yarn generate hook
```

#### Pass 2

```
What is your hook name? {{ WRITE HOOK NAME }}
```

# Defaults libs

* Framework
  * [React](https://react.dev/)
  * [Vite] (<https://vitejs.dev/>)
* Form
  * [react-hook-form](https://www.react-hook-form.com/)
  * [zod](https://zod.dev/)
  * [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
* Linter
  * [eslint](https://eslint.org/)
  * [prettier](https://prettier.io/)
* Fetcher
  * [axios](https://axios-http.com/ptbr/docs/intro)
  * [react-query](https://tanstack.com/query/v3/)
* Router Manager
  * [react-router-dom](https://reactrouter.com/en/main)
* Test
  * [vitest](https://vitest.dev/config/)
  * [faker](https://fakerjs.dev/)
  * [testing library](https://testing-library.com/)
  * [msw](https://mswjs.io/)
