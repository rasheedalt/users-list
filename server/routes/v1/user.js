import { Router } from "express";
import { searchUsers } from "../../controllers/UserController";

const userRouter = Router();

userRouter.get('search', searchUsers);

export default userRouter;
