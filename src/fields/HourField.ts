import { CronField } from './CronField';
import { FieldExpander } from '../utils/FieldExpander';

export class HourField extends CronField {
  getName(): string {
    return 'hour';
  }

  getMin(): number {
    return 0;
  }

  getMax(): number {
    return 23;
  }

  expand(): number[] {
    return FieldExpander.expand(this.expression, this.getMin(), this.getMax());
  }
}
