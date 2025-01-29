import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cars_listings{
    @PrimaryGeneratedColumn('increment')
    listing_id: number
    
    @Column({type: 'int'})
    car_id: number

    @Column('numeric')
    listing_price: number

    @Column('int')
    user_id: number

    @Column('timestamp')
    created_at: Date
}0