import { CronField } from './CronField';

export class CommandField extends CronField {
  getName(): string {
    return 'command';
  }

  getMin(): number {
    return 0;
  }

  getMax(): number {
    return 0;
  }

  expand(): string {
    return this.expression;
  }
}
