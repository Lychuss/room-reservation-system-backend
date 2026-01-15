import { createAccount, idNameRole } from "../services/auth.service.js";
import { hashPass } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";
import User from '../models/user.model.js'

export const signup = async (req, res) => {
    const { dob, firstName, lastName, username, password, role } = req.body;

    try {
        
        const hashPassword = await hashPass(password);

        const user = new User(
            dob,
            firstName,
            lastName,
            username,
            hashPassword,
            role
        )

        const signUp = await createAccount(user);

        if(!signUp) return res.status(401).json({ message: 'Cannot create an account!', success: false});

        return res.status(200).json({ message: 'You have sign up successfully!', success: true});

    } catch (err) {
        console.log(err);
        return res.status(405).json({ message: 'There was a server error in signing you up!', success: false});
    }
}

export const login = async (req, res) => {
        const { username } = req.body;
    try {
        const data = await idNameRole(username);

        const rows = data.rows;
        
        const token = generateToken(rows.user_id, rows.first_name, rows.role);

        return res.status(200).json({ message: 'You have login successfully', success: true, token: token });
    } catch(err) {
        console.log(err);
        return res.status(401).json({ message: 'There was an error in the server!', success: false });
    }

}