import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1738162191421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '20',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp'
                    },
                    {
                        name: 'last_login',
                        type: 'timestamp'
                    },
                    {
                        name: 'status',
                        type: 'varchar'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
