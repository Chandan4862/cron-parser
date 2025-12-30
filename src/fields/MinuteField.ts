import { CronField } from './CronField';
import { FieldExpander } from '../utils/FieldExpander';

export class MinuteField extends CronField {
  getName(): string {
    return 'minute';
  }

  getMin(): number {
    return 0;
  }

  getMax(): number {
    return 59;
  }

  expand(): number[] {
    return FieldExpander.expand(this.expression, this.getMin(), this.getMax());
  }
}
