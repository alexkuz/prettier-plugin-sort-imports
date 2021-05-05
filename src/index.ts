import { parsers as babelParsers } from 'prettier/parser-babel';
import { parsers as flowParsers } from 'prettier/parser-flow';
import { parsers as typescriptParsers } from 'prettier/parser-typescript';
import { preprocessor } from './preprocessor';

const options = {
    importOrder: {
        type: 'string',
        category: 'Global',
        array: true,
        default: [{ value: [] }],
        description: 'Provide an order to sort imports.',
    },
    importOrderKind: {
        type: 'choice',
        category: 'Global',
        array: true,
        default: [{ value: [] }],
        description: 'Specify a kind of import for pattern in importOrder',
        choices: [{
            value: '',
            description: 'Any kind of import'
        }, {
            value: 'value',
            description: 'Value import'
        }, {
            value: 'type',
            description: 'Type import'
        }, {
            value: 'typeof',
            description: 'Typeof import'
        }]
    },
    importOrderSeparation: {
        type: 'boolean',
        category: 'Global',
        default: false,
        description: 'Should imports be separated by new line ?',
    },
    experimentalBabelParserPluginsList: {
        type: 'string',
        category: 'Global',
        array: true,
        default: [{ value: [] }],
        description: 'Provide a list of plugins for special syntax',
    }
};

module.exports = {
    parsers: {
        babel: {
            ...babelParsers.babel,
            preprocess: preprocessor,
        },
        flow: {
            ...flowParsers.flow,
            preprocess: preprocessor,
        },
        typescript: {
            ...typescriptParsers.typescript,
            preprocess: preprocessor,
        },
    },
    options,
};
