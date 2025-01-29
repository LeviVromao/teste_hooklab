import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cars } from "./Cars";
import { Review } from "./Review";
import { Post } from "./Post";

@Entity()
export class Users {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column("varchar", {length: 20})
    name: string

    @Column("timestamp")
    created_at: Date

    @Column("timestamp")
    last_login: Date

    @Column("varchar")
    status: string

    @OneToMany(() => Cars, car => car.user)
    cars: Cars[]

    @OneToMany(() => Review, review => review.user)
    reviews: Review[];
    
    @OneToMany(() => Post, post => post.user)
    posts: Post[]
}