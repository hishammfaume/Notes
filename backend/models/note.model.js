import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: "General",
    },
    image :{
        type: String,
        required: true
    }
}, {
    timestamps: true //created at and updated at
});

const Note = mongoose.model("Note", noteSchema);

export default Note;