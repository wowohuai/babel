import { Parser } from 'acorn';
import JSX from 'acorn-jsx';
import ShuaiPlugin from './acorn-plugin.mjs';

const MyParser = Parser.extend(JSX(), ShuaiPlugin);

const sourceCode = `
shuai
export default class Clazz {
  say() {
      console.debug(3);
  }
  render() {
      return <div>{console.error(4)}</div>
  }
}

`;

// ast
console.log(
  MyParser.parse(sourceCode, {
    ecmaVersion: 6,
    sourceType: 'module'
  })
);
