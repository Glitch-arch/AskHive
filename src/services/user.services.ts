interface Irepo{
    registerUser: (userData:object) => object,
    getUser: (userId: string) => object,
    updateUser: (userId: string, userData: IuserData) => object
}
interface IuserData{
    username: string,
    email: string,
    bio?: string | null | undefined
}

export default class userServices {
    userRepository: Irepo;
    constructor(userRepository : Irepo) {
        this.userRepository = userRepository;
    }

    async registerUser(userData: object) {
        try {
            const response = await this.userRepository.registerUser(userData);
            console.log("Logging in service layer :", response);
            return response;    
        } catch (error) {
            console.log("Got an error in service layer - User Class");
        }
    }
    

    async getUser(userId: string) {
        try {
            const response = await this.userRepository.getUser(userId);
            return response;
        } catch (error) {
            console.log("Got an error in service layer - User Class");
        }
    }

    async updateUser(userId: string, userData: IuserData) {
        try {
            const response = await this.userRepository.updateUser(userId, userData);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    }