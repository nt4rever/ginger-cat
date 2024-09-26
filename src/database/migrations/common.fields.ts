import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export const keyFields: TableColumnOptions[] = [
  {
    name: 'id',
    type: 'uuid',
    isGenerated: true,
    generationStrategy: 'uuid',
    isPrimary: true,
    isNullable: false,
  },
];

export const auditFields: TableColumnOptions[] = [
  {
    name: 'created_at',
    type: 'timestamp with time zone',
    isNullable: true,
    default: 'now()',
  },
  {
    name: 'updated_at',
    type: 'timestamp with time zone',
    isNullable: true,
    default: 'now()',
  },
  {
    name: 'deleted_at',
    type: 'timestamp with time zone',
    isNullable: true,
  },
];
