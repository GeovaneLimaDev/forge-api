import Project from "../models/Project.js";

//salvando projeto no banco
export async function createProject(newProject) {
    const project = await Project.create(newProject)
    return project
}

//buscando um projeto no banco
export async function getOneProject(projectId, userId) {
    const projectDB = await Project.findOne({where: {id: projectId, UserId: userId}})
    return projectDB
} 

//deletando projeto 
export async function deleteProject(projectId, userId) {
    await Project.destroy({where: {id: projectId, UserId: userId}})
}

//listando projetos 
export async function getAllProject(userId) {
    const projectList = await Project.findAll({where: {UserId: userId}})
    return projectList
} 