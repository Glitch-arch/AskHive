import { User } from "../models/user.models";

interface IuserData{
    username: string,
    email: string,
    bio?: string | null | undefined
}

interface Irepo{
    registerUser: (userData:object) => object,
    getUser: (userId: string) => object,
    updateUser: (userId: string, userData: IuserData) => object
}

export default class userRespository implements Irepo{

    async registerUser(userData : object) {
      try {
          const userCreation = await User.create({ ...userData });
          console.log("Logging in user repo layer :", userCreation);
        return userCreation;
      } catch (error: any) {
          throw new error();
      }
      
    }

    async getUser(userId: string) {
        try {
            const userData = await User.findById(userId);
            return userData;
        } catch (error: any) {
            throw new error;
        }
    }

    async updateUser(userId: string, userData: IuserData) {
        try {
            const { username, email, bio } = userData;
            const response = await User.findByIdAndUpdate(userId, { username, email, bio });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}