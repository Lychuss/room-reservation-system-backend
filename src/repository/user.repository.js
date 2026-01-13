import pool from '../config/db.js';

export const insert = (dob, firstName, lastName, username, password, role) => {
    return pool.query(
        `INSERT INTO users VALUE ($1, $2, $3, $4, $5, $6)`, 
        [dob, firstName, lastName, username, password, role]
    );
}

export const select = (username) => {
    return pool.query(
        `SELECT users.password FROM users WHERE username = $1`,
        [username]
    );
}