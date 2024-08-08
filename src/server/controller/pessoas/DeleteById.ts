import { Request,Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PessoasProvider } from "../../database/providers/pessoas";
import * as yup from 'yup'
import { validation } from "../../shared/middleware";


interface IparamsProps {
    id?:number
}

export const DeleteByIdValidation = validation(deletebyid => ({
    params:deletebyid<IparamsProps>(yup.object().shape({
        id:yup.number().integer().required().moreThan(0)
    }))

}))

export const deletebyid = async (req: Request<IparamsProps>, res: Response) => {
    if(!req.params.id){
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors:{
                default:"E necessario o ID para apagar o registro"
            }
        })
    }
    const result = await PessoasProvider.DeleteByid(req.params.id)
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default:"Erro ao apagar registro"
            }
        })

    }
    res.status(StatusCodes.NO_CONTENT).json("deletado com sucesso")
}