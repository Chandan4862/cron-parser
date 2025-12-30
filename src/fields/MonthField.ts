import { CronField } from './CronField';
import { FieldExpander } from '../utils/FieldExpander';

export class MonthField extends CronField {
  getName(): string {
    return 'month';
  }

  getMin(): number {
    return 1;
  }

  getMax(): number {
    return 12;
  }

  expand(): number[] {
    return FieldExpander.expand(this.expression, this.getMin(), this.getMax());
  }
}
