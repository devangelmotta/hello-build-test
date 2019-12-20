
import request from "../../utils/request";
import { client_id, secret_id } from "../Github/graphql/config";
import axios from "axios";
import { prepareToken } from "./prepareToken";

export const generateToken = async () => {
    let url_params = window.location.search.substring(1);
    url_params = url_params.split("=");
    url_params = url_params[1];
    if (!url_params) return null;

    let urlGetToken = "http://localhost:3000/v1/api/get-github-token/";
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({
            client_id: client_id,
            client_secret: secret_id,
            code: url_params
        })
    }

    var result = await request(urlGetToken, options);
    if (result) {
        prepareToken(result);
    }
}