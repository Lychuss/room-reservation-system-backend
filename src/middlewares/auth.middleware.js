import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/jwt.js';
import { checkAccount } from '../services/auth.service.js';
import { encryption } from '../utils/password.js';

export const authenticated = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader && bearerHeader.split(' ')[1];

    if(!token) return res.status(404).json({ message: 'Error you have an invalid token', success: false });

    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if(err) return res.status(404).json({ message: 'Session expired!', success: false, expired: true });

         const currentTime = Math.floor(Date.now() / 1000);

         const timeExpiration = decode.exp - currentTime;

         if(timeExpiration < 360){
            const newToken = generateToken(decode.id, decode.role, decode.name);
            res.setHeader('x-refresh-token', newToken);
         }

         req.user = decode;
         next();
    })
}

export const registration = async (req, res, next) => {
    const { username, password} = req.body;

    if(!username && !password) 
        return res.status(401).json({ message: 'Invalid input must have valid username and password', success: false });

    const storePassword = await checkAccount(username);

    if(storePassword === null) return res.status(404).json({ message: 'You have no account!', success: false});

    const auth =  await encryption;

    if(!auth) return res.status(404).json({ message: 'Incorrect Password!', success: false });

    return res.status(200).json({ message: 'Login Successfully!', success: true });
}