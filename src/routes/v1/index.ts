import { Router } from "express";
import userRouter from "./user.routes";
import { questionRouter } from "./question.routes";

const v1Router = Router();

v1Router.use("/users", userRouter);
v1Router.use("/ques", questionRouter);

export default v1Router;