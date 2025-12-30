import { CronField } from './CronField';
import { FieldExpander } from '../utils/FieldExpander';

export class DayOfWeekField extends CronField {
  getName(): string {
    return 'day of week';
  }

  getMin(): number {
    return 0;
  }

  getMax(): number {
    return 6;
  }

  expand(): number[] {
    return FieldExpander.expand(this.expression, this.getMin(), this.getMax());
  }
}
