module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        // "eslint:recommended",
        "plugin:react/recommended",
        "plugin:testing-library/react",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "testing-library", "prettier"],
    rules: {
        //
        "react/prop-types": [0],
        // testing-library
        // "testing-library/await-async-query": "error",
        // "testing-library/no-await-sync-query": "error",
        // "testing-library/no-debug": "warn",
        // "testing-library/no-dom-import": "off",
    },
    overrides: [
        {
            // enable eslint-plugin-testing-library rules or preset only for matching files!
            files: [
                "**/__tests__/**/*.[jt]s?(x)",
                "**/?(*.)+(spec|test).[jt]s?(x)",
            ],
            extends: ["plugin:testing-library/react"],
        },
    ],
};
