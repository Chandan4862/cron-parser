import { CronParser } from './core/CronParser';
import { OutputFormatter } from './core/OutputFormatter';

const input = process.argv[2];

if (!input) {
  console.error('plese use: node dist/index.js "<cron expression>"');
  process.exit(1);
}

const cron = CronParser.parse(input);
//cron si instance of CronExpression
const expanded = cron.expand();
const output = OutputFormatter.format(expanded);

console.log(output);
