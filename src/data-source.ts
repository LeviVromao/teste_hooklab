import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cars } from "./entity/Cars"
import { Users } from "./entity/Users"
import { Cars_listings } from "./entity/Cars_listings"
import { Review } from "./entity/Review"
import { Post } from "./entity/Post"
import { CreateCarsListingsTable1738156952728 } from "./migrations/1738156952728-CreateCarsListingsTable"
import { CreateUsersTable1738162191421 } from "./migrations/1738162191421-CreateUsersTable"
import { CreateCarsTable1738162295757 } from "./migrations/1738162295757-CreateCarsTable"
import { CreateReviewsTable1738178330984 }from "./migrations/1738178330984-CreateReviewsTable"
import { CreatePostsTable1738176228771 } from "./migrations/1738176228771-CreatePostsTable"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "first_teste_hooklab",
    synchronize: true,
    logging: false,
    entities: [Cars, Users, Cars_listings, Review, Post],
    migrations: [
        CreateUsersTable1738162191421, 
        CreateCarsTable1738162295757, 
        CreateCarsListingsTable1738156952728,
        CreateReviewsTable1738178330984,
        CreatePostsTable1738176228771
    ],
    subscribers: [],
})
