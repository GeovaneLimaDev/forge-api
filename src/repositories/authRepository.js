import User from "../models/User.js";

//verifica existencia do email no banco 
export async function checkingUserEmail(email) {
    const result = await User.findOne({where: {email: email}})
    return result
}
//salvando user no banco
export async function createUser(userData) {
    const result = await User.create(userData)
    return result
}