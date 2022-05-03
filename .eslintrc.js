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
        'react',
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
}