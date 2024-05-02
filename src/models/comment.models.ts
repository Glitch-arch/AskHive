import mongoose, { Types } from "mongoose";

interface Icomment {
    parent_answer_id: Types.ObjectId, 
    parent_comment_id: Types.ObjectId, 
    text: string,
    user_id: Types.ObjectId
}

const commentSchema = new mongoose.Schema <Icomment>({

    parent_answer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        default: null
    },
    parent_comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: null
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

export const Comment = mongoose.model("Comment", commentSchema);