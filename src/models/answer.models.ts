import mongoose, { Types } from "mongoose";

interface Ianswer {
    question_id: Types.ObjectId, 
    text: string,
    user_id: Types.ObjectId
}

const answerSchema = new mongoose.Schema <Ianswer>({

    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    text: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},
{
    timestamps: true
}
);

export const Answer = mongoose.model("Answer", answerSchema);