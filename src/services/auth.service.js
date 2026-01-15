import { insert, select, getIdNameRole } from '../repository/user.repository.js';

export const checkAccount = async (username) => {
    const checkPassword = await select(username);

    if(!checkPassword) return null;

    return checkPassword;  
}

export const createAccount = async (data) => {
    const insertData = await insert(data);

    if(!insertData) return false;

    return true;
}

export const idNameRole = async (username) => {
    const selectData = await getIdNameRole(username);

    if(!selectData) return null;

    return selectData;
}