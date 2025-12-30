import {
  MinuteField,
  HourField,
  DayOfMonthField,
  MonthField,
  DayOfWeekField,
  CommandField
} from '../fields';
import { CronExpression } from './CronExpression';

export class CronParser {
  static parse(input: string): CronExpression {
    const tokens = input.trim();

    if (tokens.length < 6) {
      throw new Error('Invalid cron expression');
    }

    const [min, hour, dom, mon, dow, ...command] = tokens;

    return new CronExpression([
      new MinuteField(min),
      new HourField(hour),
      new DayOfMonthField(dom),
      new MonthField(mon),
      new DayOfWeekField(dow),
      new CommandField(command.join(' '))
    ]);
  }
}
