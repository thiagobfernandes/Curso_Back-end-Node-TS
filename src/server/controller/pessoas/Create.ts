import { validation } from "../../shared/middleware";
import { PessoasProvider } from "../../database/providers/pessoas";
import { Ipessoa } from "../../database/models";
import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


interface IbodyProps extends Omit<Ipessoa, 'id'> {

}

export const CreateValidation = validation(getcreate => ({
    body:getcreate<IbodyProps>(yup.object().shape({
        email:yup.string().required().email(),
        nome:yup.string().required().min(3),
        cidadeId:yup.number().integer().required(),
        
    })),
}))

export const createPessoas = async (req:Request<{},{},IbodyProps>, res:Response) =>{
    const result = await PessoasProvider.create(req.body);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default:result.message
            }
        })
    }


    res.status(StatusCodes.CREATED).json(result)




}