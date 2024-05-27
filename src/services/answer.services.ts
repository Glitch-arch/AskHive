interface IanswerRepo{
    createAnswer: (answerData:  { ques_id: string, text: string, user_id: string}) => object; 
    updateAnswer: (params: { ans_id: string, data: object}) => object;
}


export class answerServices{
   answerRepository;
    constructor(answerRepository: IanswerRepo) {
        this.answerRepository = answerRepository;
    }

    async createAnswer(answerData:  {  ques_id: string, text: string, user_id: string}) {
        try {
            const res = await this.answerRepository.createAnswer(answerData);
            return res;   
        } catch (error) {
            console.log(error);
        }
    }

    async updateAnswer(params: { ans_id: string, data: object}) {
        try {
            const question = await this.answerRepository.updateAnswer(params);
            return question;    
        } catch (error) {
            console.log(error);
        }
    }
}