
const fetch = require("node-fetch");

/**
* Returns a formated object with tokens
* @private
*/

exports.getToken = async (req, res, next) => {
    const { client_id, client_secret, code } = req.body
    var credentials = {
        client_id: client_id,
        client_secret: client_secret,
        code: code
    }

    fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(credentials)
    })
        .then(resp => resp.json())
        .then((response) => {
            console.log(response)
            res.json({ ...response })
        })
        .catch(error => {
            throw new Error(JSON.stringify(error));
        });
}


