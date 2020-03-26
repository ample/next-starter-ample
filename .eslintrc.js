module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
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
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["prettier", "jsx-a11y"],
  rules: {
    "react/no-unescaped-entities": "off",
    "react/prop-types": [2, { ignore: ["className"] }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"]
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
