/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { PessoasProvider } from "../../database/providers/pessoas";

interface IqueryProps{
    
    page?: number; // nao obrigatorio
    limit?:number; // nao obrigatorio
    filter?:string; // nao obrigatorio
    
}
//paginacao

export const getAllValidation = validation((getschema) => ({
    query:getschema<IqueryProps>(yup.object().shape({ 
        page: yup.number().moreThan(0),  
        limit: yup.number().moreThan(0),  
        filter: yup.string().default('')

          
    })),

     }));
    


export const getAll  = async (req: Request <{}, {}, {}, IqueryProps>, res:Response) => {  //em Icidade, estou tipando por que e o terceiro parametro


    
    const result = await PessoasProvider.Getall(req.query.page || 1, req.query.limit || 7, req.query.filter || '');
    
 const count = await PessoasProvider.count(req.query.filter || '');

 

 if(result instanceof  Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors:{ default: result.message}
    });
 } else if(count instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {default: count.message}
    });
// verificando se o numero recebido nao e nan
 }


 res.setHeader('access-control-expose-headers', 'x-total-count');
 res.setHeader('x-total-count', count)


 
 
 return res.status(StatusCodes.OK).json(result)

}


