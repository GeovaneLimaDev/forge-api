import Sessions from "../models/Sessions.js";

//salvando refreshToken no banco
export async function createRefreshToken(data) {
    await Sessions.create(data)
}

//salvando refresh token no banco usando transaction
export async function createRefreshTokenTransaction(data, transaction) {
    await Sessions.create(data, {transaction})
}

//buscando refreshToken 
export async function getToken(token) {
    const tokenDB = await Sessions.findOne({where: {hashToken: token}})
    return tokenDB
}

// deletando todos os tokens antigos do usuário
export async function deleteAllTokens(userId, transaction) {
    await Sessions.destroy({where: {UserId: userId}, transaction})
}