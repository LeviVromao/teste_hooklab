import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users";
import { Post } from "./Post";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column("text")
    comment: string;

    @ManyToOne(() => Users, user => user.reviews, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "userId" })
    user: Users;

    @ManyToOne(() => Post, post => post.reviews, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "postId" })
    post: Post;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
