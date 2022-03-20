const targetCalleeName = ['log', 'info', 'error', 'debug'].map((item) => `console.${item}`);

export default function (api, state) {
  const { template, types, parse } = api;
  return {
    visitor: {
      CallExpression(path, state) {
        const calleeName = path.get('callee').toString();
        if (targetCalleeName.includes(calleeName) && path.node.loc) {
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
    }
  };
}
