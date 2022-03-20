import { transformSync } from '@babel/core';
import sourceCode from './code.mjs';
import insertParametersPlugin from './plugin.mjs';

const { code } = transformSync(sourceCode, {
  plugins: [insertParametersPlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  }
});
console.log(code);
