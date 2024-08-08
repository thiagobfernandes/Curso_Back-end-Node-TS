import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

import { PessoasProvider } from "../../database/providers/pessoas";
import { validation } from "../../shared/middleware";



interface IparamsProps{
    id?:number
}

export const GetByIdValidation = validation(get => ({
    params:get<IparamsProps>(yup.object().shape({
        id:yup.number().integer().required().moreThan(0),
    })),
}));

export  const GetbyId = async (req: Request<IparamsProps>, res: Response) => {
if(!req.params.id){
    return res.status(StatusCodes.BAD_REQUEST).json({
        errors: {
            default:"O parametro ID precisa ser informado"
        }
    })
}

const result = await PessoasProvider.Getbyid(req.params.id);
if(result instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors:{
            default:"Erro ao Buscar por ID"
        }
    })
}
res.status(StatusCodes.OK).json(result);
}

