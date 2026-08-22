import { AppError } from "../config/error.js"
import { createFeature, deleteFeature, getAllFeature, getOneFeature, updateFeature } from "../repositories/featureRepository.js"
import { getOneProject } from "../repositories/projectRepository.js"
import { uppercaseLetters } from "../utils/uppercaseLetters.js"

export class FeatureService {
    //rota de criação das funcionalidades
    static async create(userId, projectId, body) {
        //verificando existencia do projeto
        const projectDB = await getOneProject(projectId, userId)
        if(!projectDB) {
            throw new AppError('Projeto não encontrado', 404, 'PROJECT_NOT_FOUND')
        }
        //criando objeto
        const newFeature = {
            name: body.name.trim(),
            description: body.description,
            status: "FEATURE",
            ProjectId: Number(projectId),
            UserId: userId,
        }
        //salvar dados no banco
        const feature = await createFeature(newFeature)
        //retornar mensagem
        return {
            message: `Funcionalidade adicionada ao projeto '${uppercaseLetters(projectDB.name)}'`,
            feature: feature
        }
    }

    //rota para buscar todas as funcionalidades de um projeto 
    static async getAll(userId, projectId) {
        //verificar existencia do prjeto no banco
        const projectDB = await getOneProject(projectId, userId)
        if(!projectDB) {
            throw new AppError('Projeto não encontrado', 404, 'PROJECT_NOT_FOUND')
        }
        //buscar todas a feature
        const featureList = await getAllFeature(userId, projectId)
        if(featureList.length === 0) {
            return {
                message: `O projeto '${uppercaseLetters(projectDB.name)}' não tem nenhuma funcionalidade adicionada no momento.`
            }
        }
        //reordenar as feature
        const featureListOrder = featureList.sort((a, b) => b.updatedAt - a.updatedAt)
        //enviar para usuário
        return {
            feature: featureListOrder.filter(feature => feature.status === 'FEATURE'),
            to_do: featureListOrder.filter(feature => feature.status === 'TO_DO'),
            in_progress: featureListOrder.filter(feature => feature.status === 'IN_PROGRESS'),
            done: featureListOrder.filter(feature => feature.status === 'DONE'),
        }
    }

    //rota de atualização de feature
    static async update(userId, projectId, featureId, body) {
        //buscando no banco 
        const projectDB = await getOneProject(projectId, userId)
        if(!projectDB) {
            throw new AppError('Projeto não encontrado!', 404, 'PROJECT_NOT_FOUND')
        }
        //criando novo objeto 
        const newFeature = {
            name: body.name ? body.name.trim() : projectDB.name,
            description: body.description ? body.description : projectDB.description,
            status: body.status ? body.status : projectDB.status,
        }
        //salvando no banco 
        await updateFeature(newFeature, featureId, projectId, userId)
        //enviando mensagem para usuário
        return {
            message: 'Funcionalidade atualizada!'
        }
    }

    //rota de exclusãõ de feature
    static async delete(userId, projectId, featureId) {
        //verificando existência do projeto
        const projectDB = await getOneProject(projectId, userId)
        if(!projectDB) {
            throw new AppError('Projeto não encontrado!', 404, 'PROJECT_NOT_FOUND')
        }
        //verificando existência da feature
        const featureDB = await getOneFeature(projectId, featureId, userId)
        if(!featureDB) {
            throw new AppError('Funcionalidade não encontrado!', 404, 'FEATURE_NOT_FOUND')
        }
        //deletando projeto 
        await deleteFeature(projectId, featureId, userId)
        //enviando mensagem 
        return {
            message: 'Funcionalidade deletada'
        }
    }
}