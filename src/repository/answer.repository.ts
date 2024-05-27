import { Answer } from "../models/answer.models";
import { Question } from "../models/question.models";

export class answerRepository{

    async createAnswer(answerData: {ques_id: string, text: string, user_id: string}) {
        try {
            const { ques_id } = answerData;
            const question = await Question.exists({ _id: ques_id });
            if (question == null) {
                console.log("Question Not Found");
                return null;
            }
            const answer = await Answer.create(answerData); 
            return answer;
        } catch (error) {
            console.log("Logging in CreateAnswer",error);
        }
    }

    async updateAnswer(parmas: { ans_id: string, data: object }){
        try {
            const { ans_id, data } = parmas;
            const updatedAnswer = await Answer.findOneAndUpdate({ _id: ans_id }, data, { new: true });
            if (!updatedAnswer) {
                console.log("Answer not found")
                return null;
            }
            return updatedAnswer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    }
   

}