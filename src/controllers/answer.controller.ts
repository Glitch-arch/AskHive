import { answerRepository } from "../repository/answer.repository";
import { answerServices } from "../services/answer.services";
import { Request, Response } from "express";

const answerClass = new answerServices(new answerRepository);

export const createAnswer = async (req: Request, res: Response) => {
    const { ques_id, text, user_id} = req.body;
    const response = await answerClass.createAnswer({
        ques_id: ques_id,
        text: text,
        user_id: user_id,
      
    });
    res.status(201).json({ 
        success: true,
        message: "Answer created",
        payload: response
    });
};

export const updateAnswer = async (req: Request, res: Response) => {

    const { data } = req.body;
    const ans_id = req.params.id;
    const updatedAnswer = await answerClass.updateAnswer({ ans_id, data});
    res.status(200).json({
        success: true,
        message: "Updated Answer",
        payload: updatedAnswer
    });

};