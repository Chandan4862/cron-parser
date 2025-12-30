export class FieldExpander {
  static expand(expression: string, min: number, max: number): number[] {
    const values = new Set<number>();

    const parts = expression.split(',');

    for (const part of parts) {
      if (part === '*') {
        for (let i = min; i <= max; i++) values.add(i);
        continue;
      }

      if (part.includes('/')) {
        const [range, stepStr] = part.split('/');
        const step = Number(stepStr);

        const [start, end] =
          range === '*' ? [min, max] : range.split('-').map(Number);

        for (let i = start; i <= end; i += step) {
          if (i >= min && i <= max) values.add(i);
        }
        continue;
      }

      if (part.includes('-')) {
        const [start, end] = part.split('-').map(Number);
        for (let i = start; i <= end; i++) {
          if (i >= min && i <= max) values.add(i);
        }
        continue;
      }

      const num = Number(part);
      if (num >= min && num <= max) values.add(num);
    }

    return Array.from(values).sort((a, b) => a - b);
  }
}
