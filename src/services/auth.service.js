import { insert, select } from '../repository/user.repository.js';

export const checkAccount = async (username) => {
    const checkPassword = await select(username);

    if(!checkPassword) return null;

    return checkPassword;  
}