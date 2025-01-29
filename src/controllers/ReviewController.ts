import { Request, Response, Router } from "express";
import { AppDataSource } from '../data-source';
import { Review } from "../entity/Review";
import { Users } from "../entity/Users";
import { Post } from "../entity/Post";

const reviewRouter = Router()

const userRepository = AppDataSource.getRepository(Users);

reviewRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    const { rating, comment, userId, postId } = req.body;

    const user = await userRepository.findOne(userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const postRepository = AppDataSource.getRepository(Post);
    const post = await postRepository.findOne(postId);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    const reviewRepository = AppDataSource.getRepository(Review);
    const review = reviewRepository.create({ rating, comment, user, post });

    await reviewRepository.save(review);

    return res.status(201).json(review);
})

export default reviewRouter