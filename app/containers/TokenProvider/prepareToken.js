import { setToken } from "../../utils/LocalStorageSessions/methodsAccessToken";

export async function prepareToken(params) {
    let token = params.access_token;
    if (token) {
        await setToken(token)
    }
}