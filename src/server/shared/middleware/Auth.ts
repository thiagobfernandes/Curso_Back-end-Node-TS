import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { JWTservice } from "./JWTService";

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

const jwtdata= JWTservice.verify(token);

if(jwtdata === 'JWT_SECRET_NOT_FOUND'){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: { default: 'Erro ao verificar o token'}
    })
} else if( jwtdata === "INVALID_TOKEN"){
    return res.status(StatusCodes.UNAUTHORIZED).json({
        errors: { default: 'Token Invalido'}
    })


}


console.log(jwtdata);
req.headers.idUsuario = jwtdata.uid.toString();



    return next();


}