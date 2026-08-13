import Note from "../models/Note.js";

//craindo nota 
export async function createNote(data) {
    const note = await Note.create(data)
    return note
}