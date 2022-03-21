import { Parser, TokenType } from 'acorn';

// 添加关键字 token
Parser.acorn.keywordTypes['shuai'] = new TokenType('shuai', { keywords: 'shuai' });

function wordsRegexp(words) {
  return new RegExp('^(?:' + words.replace(/ /g, '|') + ')$');
}

export default function (Parser) {
  return class extends Parser {
    readToken(code) {
      // console.log('Reading a token!');
      super.readToken(code);
    }
    parse(program) {
      var newKeywords =
        'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this const class extends export import super';
      newKeywords += ' shuai'; // 增加一个关键字
      /**
       * ?: 非捕获分组
       * ?=  exp1(?=exp2) 匹配 后面是exp2的exp1
       * <?= (<?=exp2)exp1    匹配 前面是exp2的exp1
       * ?!  exp1(?!exp2) 匹配 后面不是exp2的exp1
       * <?! (<?!exp2)exp1    匹配 前面不是exp2的exp1
       *
       */
      this.keywords = new RegExp('^(?:' + newKeywords.replace(/ /g, '|') + ')$');
      return super.parse(program);
    }
    // token 组装为 ast
    parseStatement(context, topLevel, exports) {
      const TokenType = this.type;
      if (TokenType === Parser.acorn.keywordTypes['shuai']) {
        const node = this.startNode();
        return this.parseShuaiStatement(node);
      } else {
        return super.parseStatement(context, topLevel, exports);
      }
    }
    parseShuaiStatement(node) {
      this.next();
      return this.finishNode({ value: 'shuai' }, 'ShuaiStatement');
    }
  };
}
