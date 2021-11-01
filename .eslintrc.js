module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:jsx-a11y/recommended", "plugin:react/recommended"],
  globals: {
    __PATH_PREFIX__: true
  },
  overrides: [
    {
      files: ["**/*.js"],
      excludedFiles: ["./**/*.stories.js", "./**/*.spec.js"]
    },
    {
      files: ["./src/pages/**/*.js", "./src/templates/**/*.js"],
      rules: {
        "react/prop-types": 0
      }
    }
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"]
    },
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: es2021,
    requireConfigFile: false,
    sourceType: "module"
  },
  plugins: ["jest", "jsx-a11y", "prettier", "react", "sort-keys-fix"],
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"]
      }
    ],
    "import/no-unresolved": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": [2, { ignore: ["className"] }],
    "sort-keys": ["error", "asc", { caseSensitive: true, minKeys: 3, natural: true }],
    "sort-keys-fix/sort-keys-fix": 1
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
