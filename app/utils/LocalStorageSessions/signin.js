import React from 'react';

export const newUserSession = (user) => {

    if (!typeof user === 'object' || !user.password || !user.email) throw "Datos incompletos";

    try {
        let key = user.email;
        let getValue = localStorage.getItem(key);
        if (!getValue) { throw "Usuario no encontrado"; }
        getValue = JSON.parse(getValue)
        return getValue;

    } catch (error) {
        console.log(error)
        throw error;
    }
}