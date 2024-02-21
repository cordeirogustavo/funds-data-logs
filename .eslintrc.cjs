module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "rules": {
    "camelcase": "off",
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        "elements": ["img"],
        "img": ["Image"]
      }
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.spec.tsx",
          "**/vitest.config.ts",
          "**/vitest.setup.ts",
          "**/__tests__/*"
        ]
      }
    ]
  }
}
