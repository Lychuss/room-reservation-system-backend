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