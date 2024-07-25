/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

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
        filter: yup.string(),
          
    })),

     }));
    


export const getAll  = async (req: Request <{}, {}, {}, IqueryProps>, res :Response) => { //em Icidade, estou tipando por que e o terceiro parametro

   

console.log(req.query)

    


    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('nao implementado');
}

// const bodyValidation: yup.Schema<Icidade> = yup.object().shape({ //usando a biblioteca yup para validação
//     nome: yup.string().required().min(4), //  aqui estao os dados que serao verificados
//     estado: yup.string().required().min(3)

// });

// export const createValidation = validation({
//     body:bodyValidation
// });