import { pool } from '../config/db.js';

export const insert = (account) => {
    const query = `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6)`;
    
    const data =
        [
            account.dob,
            account.firstName,
            account.lastName,
            account.username,
            account.password,
            account.role
        ]

    return pool.query(query, data);
}

export const select = (username) => {
    return pool.query(
        `SELECT users.password FROM users WHERE username = $1`,
        [username]
    );
}

export const getIdNameRole = (username) => {
    return pool.query(
        'SELECT users.user_id, users.first_name, users.role FROM users WHERE username = $1',
        [username]
    );
}