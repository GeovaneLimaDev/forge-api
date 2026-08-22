import Documentation from "../models/Documentation.js";

//criando a documentação do projeto
export async function createDoc(data, transaction) {
    await Documentation.create(data, {transaction})
}

//buscando documentação no banco
export async function getDoc(projectId, userId) {
    const documentationDB = await Documentation.findOne({where: {ProjectId: projectId, UserId: userId}})
    return documentationDB
}

//atualizando documentação 
export async function updateDoc( newDocumetation, projectId, userId) {
    await Documentation.update(newDocumetation, {where: {ProjectId: projectId, UserId: userId}})
}