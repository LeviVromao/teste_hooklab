import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Users } from "./Users"

@Entity()
export class Cars {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar')
    model: string

    @Column('timestamp')
    year: Date

    @Column('varchar')
    color: string

    @ManyToOne(() => Users, user => user.cars)
    user: Users
}
