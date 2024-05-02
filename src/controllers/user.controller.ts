import mongoose from "mongoose";
import { User } from "../models/user.models";

export const createUser = async (req,res) => {
  
    try {
        const { username, email, bio } = req.body;

        if (!username || !email) {
            return console.error("Empty fields");
        }
    
        const uniqueUser = await User.find({ username, email });
    
      
    
        if (!uniqueUser) {
            try {
                const payload = {
                    username,
                    email,
                    bio
                };
                const createUserRes = await User.create(payload);
                res.status(201).json({
                    message: "User created successfully",
                    payload: createUserRes
                });
            } catch (error) {
                console.log("Error in user Controller while creating user", error);
            }
          
        }
    } catch (error) {
        console.log("Error in user Controller", error);
    }

   
    
};