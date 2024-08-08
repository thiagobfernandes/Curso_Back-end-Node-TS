import { Iusuario } from "../../database/models";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middleware";
import { UsuariosProvider } from "../../database/providers/usuario";
import { Response, Request } from "express";

interface IBodyProps extends Omit<Iusuario, 'id'> {
}

export const UsuarioValidation = validation((getschema) => ({
    body:getschema<IBodyProps>(yup.object().shape({
        nome:yup.string().required().min(3),
        email:yup.string().email().required().min(6),
        password:yup.string().required().min(4)
        
    }))
}))


export const SignUp = async (req:Request<{},{}, IBodyProps>, res:Response) => {
    const result = await UsuariosProvider.create(req.body);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default:result.message
            }
        })
    }
    return res.status(StatusCodes.CREATED).json(result);

}
