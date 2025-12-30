import { CronField } from './CronField';
import { FieldExpander } from '../utils/FieldExpander';

export class DayOfMonthField extends CronField {
  getName(): string {
    return 'day of month';
  }

  getMin(): number {
    return 1;
  }

  getMax(): number {
    return 31;
  }

  expand(): number[] {
    return FieldExpander.expand(this.expression, this.getMin(), this.getMax());
  }
}
