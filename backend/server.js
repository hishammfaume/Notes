import express from "express";
import { connectDB } from "./config/db.js";
import Note from "./models/note.model.js";

const app = express();

app.get("/api/notes", async (req, res) => {
    const note = req.body; //user will send this data

    if(!note.title || !note.description ){
        return res.status(400).json({success:false, message:"Please provide all fields"});

    }

    const newNote = new Note(note)

    try{
        await newNote.save();
        res.status(201).json({success:true, data: newNote});
    }catch (e){
        console.log("error in create note", e.message);
        res.status(500).json({success:false, message: e.message});
    }
})

app.listen(8080, () => {
    connectDB();
    console.log("Server started at http://localhost:8080");
})


