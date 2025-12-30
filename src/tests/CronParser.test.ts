import { CronParser } from '../core/CronParser';

test('parses valid cron', () => {
  const cron = CronParser.parse('0 0 1 * * /bin/run');
  expect(cron).toBeDefined();
});
