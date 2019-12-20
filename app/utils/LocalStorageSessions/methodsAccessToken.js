import React from 'react';
var key = "github_token";

export const getToken = () => {

    let getValue = localStorage.getItem(key);
    if (getValue) return getValue;
}

export const setToken = (value) => {
    console.log("Guardando el token ", value)
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        throw error;
    }


}


