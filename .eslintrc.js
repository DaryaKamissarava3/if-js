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
        "no-console": "off",
        "no-plusplus": "off",
        "eol-last": "off",
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