import mongoose, { Types } from "mongoose";

interface Iquestion {
    title: string, 
    body: string,
    topic: Types.ObjectId,
    user_id: Types.ObjectId
}

const questionSchema = new mongoose.Schema <Iquestion>({

    title: {
        type: String,
        required: [true, "Title cannot be empty"]
    },
    body: {
        type: String,
        required: true
    },
    topic: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
    }],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},
{
    timestamps: true
}
);

export const Question = mongoose.model("Question", questionSchema);