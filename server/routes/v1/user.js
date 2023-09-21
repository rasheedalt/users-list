import { Router } from "express";
import { searchUsers } from "../../controllers/UserController.js";

const userRouter = Router();

userRouter.get('/search', searchUsers);

export default userRouter;
