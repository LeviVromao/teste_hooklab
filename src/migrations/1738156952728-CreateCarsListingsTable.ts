import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCarsListingsTable1738156952728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'cars_listings',
                columns: [
                    {
                        name: 'listing_id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'car_id',
                        type: 'int'
                    },
                    {
                        name: 'user_id',
                        type: 'int'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
