#!/usr/bin/env node

const { generateTemplateFiles } = require('generate-template-files');
const path = require('path');

generateTemplateFiles([
  {
    option: '.prettierrc',
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
  {
    option: '.gitignore',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: path.resolve(__dirname, 'templates', 'test'),
    },
    dynamicReplacers: ['__no_slots__'],
    output: {
      path: '.',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: true,
    },
  },
]);
