import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export const ensureAuthenticated : RequestHandler = async (req,res,next) => {
const { authorization } = req.headers;

    if(!authorization){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors:{default : "Nao autenticado"} //falando que, se o usuario nao estiver autorizado, dar um erro de nao autorizado
        });

}

const [type,token] = authorization.split(' ');

if(type !== 'Bearer'){ //validando o tipo de token
    return res.status(StatusCodes.UNAUTHORIZED).json({
        errors:{default : "Nao autenticado"}
    });

}

if(type !== 'Bearer'){ //validando o tipo de token
    return res.status(StatusCodes.UNAUTHORIZED).json({
        errors:{default : "Nao autenticado"}
    });

}



    return next();


}