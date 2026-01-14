import { createAccount } from "../services/auth.service.js";
import User from '../models/user.model.js'

export const signup = async (req, res) => {
    const { dob, firstName, lastName, username, password, role } = req.body;

    try {
        const user = new User(
            dob,
            firstName,
            lastName,
            username,
            password,
            role
        )

        const signUp = await createAccount(user);

        if(!signUp) return res.status(401).json({ message: 'Cannot create an account!', success: false});

        return res.status(200).json({ message: 'You have sign up successfully!', success: true});
        
    } catch (err) {
        return res.status(405).json({ message: 'There was a server error in signing you up!', success: false});
    }
}