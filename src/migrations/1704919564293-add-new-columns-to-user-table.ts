import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewColumnsToUserTable1704919564293
  implements MigrationInterface
{
  name = 'AddNewColumnsToUserTable1704919564293';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "type" character varying NOT NULL DEFAULT 'customer'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "type"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
  }
}
