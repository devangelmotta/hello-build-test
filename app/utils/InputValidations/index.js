import * as yup from 'yup';


export const checkValidName = yup
    .string()
    .min(6)
    .max(20)
    .required("Name is required");

export const checkValidEmail = yup
    .string()
    .email("Type valid email format")
    .required("Email required");

const checkValidPassword = yup
    .string()
    .min(6)
    .required("Password required");


export const validators = {
    firstname: checkValidName,
    email: checkValidEmail,
    password: checkValidPassword
}

