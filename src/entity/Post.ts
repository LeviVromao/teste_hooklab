import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Users } from "./Users";
import { Review } from "./Review";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => Users, user => user.posts)
    user: Users;

    @OneToMany(() => Review, review => review.post)
    reviews: Review[];
}
