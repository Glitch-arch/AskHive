import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Username cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "Email cannot be empty"]
    },
    bio: {
        type: String,
        required: false
    }

});

export const User = mongoose.model("User", userSchema);
// module.exports = User;