import { Request,Response } from "express";

import { userRespository } from "../repository/user.repository";
import { userServices } from "../services/user.services";

const userClass = new userServices(new userRespository);

export const createUser = async(req: Request, res: Response) => {
    try {
        const { username, email } = req.body;
        const userData = await userClass.registerUser({ username, email });
        res.status(201).json({
            success: true,
            message: "user created successfully",
            payload: userData
        });
    } catch (error) {
        console.log("Error in userController", error);
    }
};

export const getUser = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const userData = await userClass.getUser(userId);
    res.status(200).json({
        success: true,
        message: "User fetched successfully",
        payload: userData
    });
};

export const updateUser = async (req: Request, res: Response) => {
    
    try { 
        const { userid, userData } = req.body;
        const updatedUserData = await userClass.updateUser(userid, userData);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            payload: updatedUserData
        });        
    } catch (error) {
        console.log(error);
    }

};

export const ping = ( res: Response) => {
    // const ds = req;
    res.status(200).json({
        success: true,
        message: "user Controller is up"
    });
};

