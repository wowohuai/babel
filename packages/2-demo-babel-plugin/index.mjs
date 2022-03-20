import sourceCode from './code.mjs';
import parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import template from '@babel/template';
import types from '@babel/types';

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
});

const targetCalleeName = ['log', 'info', 'error', 'debug'].map((item) => `console.${item}`);
traverse.default(ast, {
  CallExpression(path, state) {
    const calleeName = generate.default(path.node.callee).code;

    if (targetCalleeName.includes(calleeName) && path.node.loc) {
      console.log(path.node.loc);
      const { line, column } = path.node.loc.start;
      const newNode = template.expression(`console.log("filename: (${line}, ${column})")`)();
      newNode.isNew = true;
      if (path.findParent((path) => path.isJSXElement())) {
        path.replaceWith(types.arrayExpression([newNode, path.node]));
        path.skip();
      } else {
        path.insertBefore(newNode);
      }
    }
  }
});

const { code, map } = generate.default(ast);
console.log(code);
