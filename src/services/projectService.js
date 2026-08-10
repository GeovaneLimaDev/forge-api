import { AppError } from "../config/error.js"
import { createDoc } from "../repositories/documentationRepository.js"
import { createProject, deleteProject, getAllProject, getOneProject, updateProject } from "../repositories/projectRepository.js"
import { uppercaseLetters } from "../utils/uppercaseLetters.js"

export class ProjectService {
    //rota de criação de projetos
    static async create(body, userId) {
        //criando objeto do novo projeto
        const project = {
            name: body.name.trim().toLowerCase(),
            description: body.description,
            deadline: body.deadline,
            UserId: userId
        }

        try {
            //enviandos dados para o banco
            const projectDB = await createProject(project)
            //criando documentação do projeto
            const documentation = {
                title: `documetação - '${body.name}'`,
                UserId: projectDB.UserId,
                ProjectId: projectDB.id
            }
            await createDoc(documentation)
            //retornando mensagem de sucesso para usuário
            return {
                message: 'Projeto criado!',
                project: projectDB
            }   
        } catch (err) {
            throw new AppError('Algo deu errado, tente novamente mais tarde!', 500, 'INTERNAL_PROBLEM')
        }
    }

    //rota para deletar projeto 
    static async delete(projectId, userId){
        //verificar existência no banco
        const projectDB = await getOneProject(projectId, userId)
        if(!projectDB) {
            throw new AppError('Projeto não encontrado!', 404, 'PROJECT_NOT_FOUND')
        }
        //deletar projeto
        await deleteProject(projectId, userId)
        //enviar mensagem
        return {
            message: `Projeto '${projectDB.name}' deletado!`
        }  
    }

    //listando todos os projetos 
    static async getAll(userId) {
        //buscando no banco 
        const listProject = await getAllProject(userId)
        if(listProject.length === 0) {
            return {
                message: 'Usuário não tem nenhum projeto salvo.'
            }
        }
        //formatando dados
        const listWithNewName = listProject.map((project) => {
            const newName = uppercaseLetters(project.name)
            return {
                id: project.id,
                name: newName,
                description: project.description,
                deadline: project.deadline,
                createdAt: project.createdAt,
                updatedAt: project.updatedAt,
                UserId: project.UserId
            }
        })
        //enviando pro usuário
        return listWithNewName
    }

    //buscando um projeto especifíco 
    static async getOne(projectId ,userId) {
        //buscando no banco 
        const listProject = await getOneProject(projectId, userId)
        if(!listProject) {
            throw new AppError('Projeto não encontrado!', 404, 'PROJECT_NOT_FOUND')
        }
        //formatando dados 
        const newName = uppercaseLetters(listProject.name) 
        listProject.name = newName
        //enviando para o usuário 
        return listProject
    }

    //editando um projeto
    static async update(projectId , userId , body) {
        //buscando no banco 
        const projectDB = await getOneProject(projectId, userId)
        if(!projectDB) {
            throw new AppError('Projeto não encontrado!', 404, 'PROJECT_NOT_FOUND')
        }
        //criando novo objeto 
        const newProject = {
            name: body.name ? body.name : projectDB.name,
            description: body.description ? body.description : projectDB.description,
            deadline: body.deadline ? body.deadline : projectDB.deadline,
        }

        //salvando no banco
        await updateProject(userId, projectId, newProject)

        //enviando para o usuário 
        return {
            message: `Projeto atualizado!`
        }
    }
}