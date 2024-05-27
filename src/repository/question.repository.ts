import { Question } from "../models/question.models";
import { Topic } from "../models/topic.models";

export class questionRepository{

    async createQuestion(questionData: { title: string, body: string, user_id: string, topic: string,}) {
        try {
            const { title, body, user_id, topic } = questionData;
            const topisc = await Topic.create({ name: topic });
            console.log(topisc);
            const quesObject = await Question.create({ title, body, user_id, topic: topisc._id });
            return quesObject;
        } catch (error) {
            console.log("Logging in CreateQuestion",error);
        }
    }

    async getQuestion(params: {text: string, tag: string}) {
       try {
           const { text, tag } = params;
           const topic = await Topic.findOne({ name: tag });
           if (!topic) {
               console.log("No topic found with the given name");
           }
           // Only coverd Case in which text and tag will be provided.
           const questionObj = await Question.find({ title: text, topic: topic?._id }).populate("topic");
           console.log(questionObj);
           return questionObj;
           
       } catch (error) {
           console.log(error);
       }
    }
   

}