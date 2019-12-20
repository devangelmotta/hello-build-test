import React from 'react';
import { getToken } from "./methodsAccessToken";

export const checkExistToken = async (client_id) => {
    let key = "github_token";
    try {
        let getValue = await getToken()
        // if (!getValue) { redirectToGetCode(client_id) }

    } catch (error) {
        console.log(error)
        throw error;
    }
}

const redirectToGetCode = (client_id) => {
    let url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user`;
    window.location.replace(url);
}