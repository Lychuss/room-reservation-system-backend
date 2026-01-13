import bcrypt from "bcryptjs";

export const hashPass = async (password) => {
    return bcrypt.hash(password, 10);
}

export const encryption = async (origPassword, hashPassword) => {
    return bcrypt.compare(origPassword, hashPassword);
}