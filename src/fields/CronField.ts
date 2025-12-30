export abstract class CronField {
  constructor(protected expression: string) {}

  abstract getName(): string;
  abstract getMin(): number;
  abstract getMax(): number;

  expand(): number[] | string {
    throw new Error('Must be implemented by subclass');
  }
}
