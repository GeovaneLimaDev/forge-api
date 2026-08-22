import Feature from "../models/Feature.js";

//criação das funcionalidades
export async function createFeature(data) {
    const feature = await Feature.create(data)
    return feature
}

//buscando todas as features de um projeto 
export async function getAllFeature(userId, projectId) {
    const list = Feature.findAll({where: {UserId: userId, ProjectId: projectId}})
    return list
}

//atualizando feature 
export async function updateFeature(data, featureId, projectId, userId) {
    await Feature.update(data, {where: {UserId: userId, ProjectId: projectId, id: featureId}})
}

//buscando uma feature
export async function getOneFeature(projectId, featureId, userId) {
    const feature = Feature.findOne({where: {UserId: userId, id: featureId, ProjectId: projectId}})
    return feature
}

//deletando feature 
export async function deleteFeature(projectId, featureId, userId) {
    await Feature.destroy({where: {UserId: userId, ProjectId: projectId, id: featureId}})
}