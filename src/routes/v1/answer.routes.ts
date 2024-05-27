import { Router } from "express";
import { createAnswer, updateAnswer } from "../../controllers/answer.controller";


export const answerRouter = Router();

answerRouter.post("/:quesId", createAnswer);
answerRouter.put("/:ansId", updateAnswer);