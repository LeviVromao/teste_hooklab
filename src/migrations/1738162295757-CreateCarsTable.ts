import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCarsTable1738162295757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cars',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'model',
                        type: 'varchar',
                        length: '50',
                    },
                    {
                        name: 'year',
                        type: 'timestamp'
                    },
                    {
                        name: 'color',
                        type: 'varchar',
                        length: '20'
                    },
                    {
                        name: 'userId',
                        type: 'int'
                    }
                ]
            })
        );
        await queryRunner.createForeignKey("cars", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("cars");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        await queryRunner.dropForeignKey("cars", foreignKey);

        await queryRunner.dropTable
    }

}
