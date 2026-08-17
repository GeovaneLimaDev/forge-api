import Note from "../models/Note.js";

//craindo nota 
export async function createNote(data) {
    const note = await Note.create(data)
    return note
}
//buscando uma unica nota 
export async function getNote(userId, noteId) {
    const note = await Note.findOne({where: {UserId: userId, id: noteId}})
    return note
}
//buscando todas as notas de um projeto 
export async function getAllNote(userId, projectId) {
    const listNote = await Note.findAll({where: {UserId: userId, ProjectId: projectId}})
    return listNote
}
//fazendo update da nota 
export async function updateNote(userId, noteId, data) {
    await Note.update(data, {where: {UserId: userId, id: noteId}})
}
//deletando nota 
export async function deleteNote(userId, noteId) {
    await Note.destroy({where: {UserId: userId, id: noteId}})
}
