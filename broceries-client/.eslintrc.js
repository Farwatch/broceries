module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'installedESLint': true,
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'flowtype'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-unused-vars': [
            'error',
            {'varsIgnorePattern': 'React|Router|Provider'}
        ],
        'no-restricted-globals': [
            'error',
            'fetch'
        ],
        'flowtype/define-flow-type': 1,
        'flowtype/space-after-type-colon': [
            1,
            'always'
        ],
        'flowtype/space-before-type-colon': [
            1,
            'never'
        ],
        'flowtype/use-flow-type': 1,
        'flowtype/valid-syntax': 1,
        'flowtype/require-parameter-type': ['off'],
        'react/jsx-no-undef': 0,
        'no-undef': 0
    },
    'settings': {
        'flowtype': {
            'onlyFilesWithFlowAnnotation': true
        },
        'react': {
            'pragma': 'React',  // Pragma to use, default to 'React'
            'version': '15.4.2' // React version, default to the latest React stable release
        }
    },
    'globals': {
        'process': true,
        'module': true,
        'require': true,
        'getState': true,
        'ReactPerf': true,
        'utag_data': true,
        'googletag': true,
        'navigator': true
    }
}
