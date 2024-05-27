import { Router } from "express";
import { createQuestion, getQuestion } from "../../controllers/question.controller";
import { Request, Response } from "express";

export const questionRouter = Router();

questionRouter.post("/", createQuestion);
questionRouter.get("/ping", (req: Request, res: Response) => {
    const { body } = req;
    res.status(200).json({
        success: true,
        message: "success",
        body: body
    });
});
questionRouter.get("/search", getQuestion);