import React from 'react';

export const setNewUserLocalStorage = (user) => {

    if (!typeof user === 'object' || !user.password || !user.email) return;
    console.log("PAssed")
    try {
        let key = user.email;
        let getValue = localStorage.getItem(key);
        if (getValue) { throw "Usuario ya existe"; }
        let value = JSON.stringify(user)
        localStorage.setItem(key, value)
        return;
    } catch (error) {
        throw error;
    }
}


