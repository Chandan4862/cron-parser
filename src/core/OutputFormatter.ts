export class OutputFormatter {
  static format(rows: { name: string; value: any }[]): string {
    return rows
      .map((row) => {
        const name = row.name.padEnd(14, ' ');
        const value = Array.isArray(row.value)
          ? row.value.join(' ')
          : row.value;
        return `${name}${value}`;
      })
      .join('\n');
  }
}
