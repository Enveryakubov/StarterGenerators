#!/usr/bin/env node

const { generateTemplateFiles } = require('generate-template-files');
const path = require('path');

generateTemplateFiles([
  {
    option: 'Create Prettier Config',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: path.resolve(__dirname, 'templates', 'prettier'),
    },
    dynamicReplacers: ['__no_slots__'],
    output: {
      path: '.',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: true,
    },
  },
]);
