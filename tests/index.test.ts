import { describe, expect, it } from 'vitest';
import { format, resolveOptions } from 'indentier';
import plugin from '../src/index.ts';

describe('@indentier/plugin-go', () => {
  it('registers .go extension', () => {
    expect(plugin.extensions).toContain('.go');
  });

  it('is ruby compatible', () => {
    expect(plugin.rubyCompatible).toBe(true);
  });

  it('formats a Go file: declaration after package/import, end uses _ = end', () => {
    const input = 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("hello")\n}\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 }),
      '.go',
      plugin,
    );

    expect(out).toContain('var end any=nil');
    expect(out.split('\n').some((l) => l.trim() === '_ = end')).toBe(true);
    // package statement must remain first
    expect(out.split('\n')[0]!.trim()).toBe('package main');
    // declaration must appear before the first func
    const lines = out.split('\n');
    const declIdx = lines.findIndex((l) => l.includes('var end any=nil'));
    const funcIdx = lines.findIndex((l) => l.trimStart().startsWith('func '));
    expect(declIdx).toBeLessThan(funcIdx);
  });

  it('getEndStatement returns _ = <variableName>', () => {
    expect(plugin.getEndStatement!('end')).toBe('_ = end');
    expect(plugin.getEndStatement!('fin')).toBe('_ = fin');
  });

  it('idempotent: formatting twice gives the same result', () => {
    const input = 'package main\n\nfunc main() {\n  fmt.Println("hello")\n}\n';
    const opts = resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 });
    const first = format(input, opts, '.go', plugin);
    const second = format(first, opts, '.go', plugin);
    expect(second).toBe(first);
  });
});
