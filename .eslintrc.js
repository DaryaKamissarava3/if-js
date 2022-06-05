module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends: ['airbnb'],
    plugins: [
        'babel',
        'import',
        'react'
    ],
    rules: {
        "prefer-const": "error",
        "no-console": "off",
        "no-plusplus": "off",
        "eol-last": "off",
        "no-restricted-syntax": "off",
        "guard-for-in": "off",
        "no-prototype-builtins": "off",
        "no-else-return": "off",
        "max-len": ["error", 100, {"ignoreUrls": true}],
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
}