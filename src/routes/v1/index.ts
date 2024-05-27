import { Router } from "express";
import userRouter from "./user.routes";
import { questionRouter } from "./question.routes";
import { answerRouter } from "./answer.routes";

const v1Router = Router();

v1Router.use("/users", userRouter);
v1Router.use("/ques", questionRouter);
v1Router.use("/ans", answerRouter);

export default v1Router;