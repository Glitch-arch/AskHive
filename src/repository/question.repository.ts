import { Question } from "../models/question.models";

export class questionRepository{

    async createQuestion(questionData: object) {
        try {
            const quesObject = await Question.create({ ...questionData });
            return quesObject;
        } catch (error) {
            console.log(error);
        }
    }

    async getQuestion(params: {text: string, tag: string}) {
       try {
        const { text, tag } = params;
        const questionObj = await Question.find({ topic: tag }, { body: text }, function (err: Error, data: any) {
            if (err) {
                console.log("Error while finding the question");
            }
            console.log("Logging data / key of searched question:", data);
        });
        return questionObj;
       } catch (error) {
           console.log(error);
       }
    }
   

}