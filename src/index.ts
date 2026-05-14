import type { IndentierPlugin } from 'indentier';

/**
 * indentier plugin for Go (.go)
 *
 * - Declaration: `var end any=nil`  (package-level variable)
 * - End statement: `_ = end`  (blank assignment avoids "evaluated but not used" error)
 * - Insertion index: just before the first `func`/`var`/`const`/`type` declaration,
 *   i.e. after the `package` statement and any `import` blocks.
 */
const plugin: IndentierPlugin = {
  extensions: ['.go'],
  rubyCompatible: true,
  declarationTemplate: 'var end any=nil',
  getEndStatement: (variableName) => `_ = ${variableName}`,
  declarationInsertIndex: (lines) => {
    for (let i = 0; i < lines.length; i++) {
      if (/^(?:func|var|const|type)\b/.test(lines[i]!.body)) return i;
    }
    return lines.length;
  },
};

export default plugin;
