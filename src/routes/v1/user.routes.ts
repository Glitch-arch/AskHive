import { Router } from "express";

import { createUser, getUser, ping } from "../../controllers/user.controller";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/:userId", getUser);
userRouter.get("/ping", ping );

export default userRouter;