import { questionRepository } from "../repository/question.repository";
import { questionServices } from "../services/question.services";
import { Request, Response } from "express";

const questionClass = new questionServices(new questionRepository);

export const createQuestion = async (req: Request, res: Response) => {
    const { title, body, topic, user_id } = req.body;
    const response = await questionClass.createQuestion({
        title: title,
        body: body,
        topic: topic,
        user_id: user_id
    });
    res.status(201).json({ 
        success: true,
        message: "Question created",
        payload: response
    });
};

export const getQuestion = async (req: Request, res: Response) => {
    const text : string = req.query.text?.toString() ?? "";
    const tag : string = req.query.tag?.toString() ?? "" ;

    console.log("text and tag: ", text, tag, typeof text, typeof tag);

    const questionArray = await questionClass.getQuestion({ text, tag });
    res.status(200).json({
        success: true,
        message: "Fetched Questions",
        payload: questionArray
    });

};