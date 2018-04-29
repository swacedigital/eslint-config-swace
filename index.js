module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true,
    "es6": true,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017,
  },
  "rules": {
    "jsx-a11y/no-autofocus": 1,
    "class-methods-use-this": 0,
    "react/require-default-props": 0,
    "react/prop-types": 0,
    "keyword-spacing": 0,
    "max-len": 0,
    "react/no-array-index-key": 0,
    "react/no-did-mount-set-state": 1,
    "jsx-a11y/click-events-have-key-events": 0,
    "object-curly-newline": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["to"],
      },
    ]
  },
  "globals": {
    "NODE_ENV": true,
  },
};
