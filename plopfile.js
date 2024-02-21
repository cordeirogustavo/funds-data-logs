export default plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
      {
        type: 'list',
        name: 'file',
        message: 'What is your file name?',
        choices: ['components', 'pages']
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{dashCase file}}/{{dashCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{dashCase file}}/{{dashCase name}}/{{dashCase name}}.component.spec.tsx',
        templateFile: 'plop-templates/component/test.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{dashCase file}}/{{dashCase name}}/{{dashCase name}}.component.tsx',
        templateFile: 'plop-templates/component/component.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{dashCase file}}/{{dashCase name}}/{{dashCase name}}.template.spec.tsx',
        templateFile: 'plop-templates/component/test.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{dashCase file}}/{{dashCase name}}/{{dashCase name}}.template.tsx',
        templateFile: 'plop-templates/component/template.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{dashCase file}}/{{dashCase name}}/{{dashCase name}}.translations.ts',
        templateFile: 'plop-templates/component/translations.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{dashCase file}}/{{dashCase name}}/{{dashCase name}}.types.ts',
        templateFile: 'plop-templates/component/types.ts.hbs',
      }
    ],
  });

  plop.setGenerator('hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?'
      },
    ],
    actions: [      
      {
        type: 'add',
        path: 'src/hooks/{{dashCase name}}/index.ts',
        templateFile: 'plop-templates/hook/hook.ts.hbs',
      }
    ],
  });
};