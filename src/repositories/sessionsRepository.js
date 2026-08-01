import Sessions from "../models/Sessions.js";

//salvando refreshToken no banco
export async function createRefreshToken(data) {
    await Sessions.create(data)
}