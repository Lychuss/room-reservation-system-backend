import jwt from 'jsonwebtoken';

export const generateToken = (id, role, name) => {
    const payLoad = { id: id, name: name, role: role};
    
    const token = jwt.sign(payLoad, process.env.SECRET_KEY, { expiresIn: '1h'});

    return token;
}

export const getName = (token) => {

    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        return decode.name;

    } catch (err){
        return null;
    }
}
