import mongoose from "mongoose";

interface Itopic {
    name: string
}

const topicSchema = new mongoose.Schema <Itopic>({
    name: {
        type: String,
        required: [true, "name cannot be empty"]
    },
});

export const Topic = mongoose.model("Topic", topicSchema);
// module.exports = User;