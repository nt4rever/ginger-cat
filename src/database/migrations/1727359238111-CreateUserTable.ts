import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { auditFields, keyFields } from './common.fields';

const tableName = 'users';

export class CreateUserTable1727359238111 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          ...keyFields,
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          ...auditFields,
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName, true);
  }
}
