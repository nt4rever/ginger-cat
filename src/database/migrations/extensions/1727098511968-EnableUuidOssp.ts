import { MigrationInterface, QueryRunner } from 'typeorm';

const extensionName = 'uuid-ossp';

export class EnableUuidOssp1727098511968 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE EXTENSION IF NOT EXISTS "${extensionName}";`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP EXTENSION IF EXISTS "${extensionName}";`);
  }
}
