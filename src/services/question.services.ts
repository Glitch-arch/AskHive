interface IquestionRepo{
    createQuestion: (questionData:  { title: string, body: string, user_id: string, topic: string,}) => object; 
    getQuestion: (params: {text: string, tag: string}) => object;
}


export class questionServices{
    questionRepository;
    constructor(questionRepository: IquestionRepo) {
        this.questionRepository = questionRepository;
    }

    async createQuestion(questionData:  { title: string, body: string, user_id: string, topic: string,}) {
        try {
            const res = await this.questionRepository.createQuestion(questionData);
            return res;   
        } catch (error) {
            console.log(error);
        }
    }

    async getQuestion(params: {text: string, tag: string}) {
        try {
            const question = await this.questionRepository.getQuestion(params);
            return question;    
        } catch (error) {
            console.log(error);
        }
    }
}