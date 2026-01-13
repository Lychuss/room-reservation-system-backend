import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/jwt.js';

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

export const registration = () => {

}