import { CronField } from '../fields/CronField';

export class CronExpression {
  fields: CronField[];
  constructor(fields: CronField[]) {
    this.fields = fields;
  }

  expand() {
    return this.fields.map((field) => ({
      name: field.getName(),
      value: field.expand()
    }));
  }
}
