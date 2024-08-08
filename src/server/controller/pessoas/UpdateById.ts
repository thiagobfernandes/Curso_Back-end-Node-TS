import { StatusCodes } from "http-status-codes";
import { Ipessoa } from "../../database/models";
import { PessoasProvider } from "../../database/providers/pessoas";
import * as yup from 'yup';
import { Request, Response } from "express";
import { validation } from "../../shared/middleware";

interface IparamsProps {
    id?:number
}

interface IbodyProps extends Omit<Ipessoa, 'id'> {}

 export const updateValidation = validation(update => ({
    body:update<IbodyProps>(yup.object().shape({
        nome:yup.string().min(3).required(),
        email:yup.string().required().email(),
        cidadeId:yup.number().integer().required()
    })),
    params:update<IparamsProps>(yup.object().shape({
        id:yup.number().integer().moreThan(0)
    }))
}))


export const UpdatePessoas = async (req:Request<IparamsProps, {}, IbodyProps>, res:Response) => {
    if(!req.params.id){
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors:{
                default:"e necessario o id para atualizar o registro"
            }
        })
    }

    const result = await PessoasProvider.UpdateByid(req.params.id, req.body)
    if(result instanceof Error){
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default:result.message
            }
        })
    }

   return res.status(StatusCodes.NO_CONTENT).json(result);
}