/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { Knex } from "knex";
import { cidadesProvider } from "../../database/providers/cidades";

interface IparamProps{
    id?: number; // obrigatorio
 
    
}
//paginacao

export const getByidvalidation = validation((getschema) => ({
    params:getschema<IparamProps>(yup.object().shape({ 
        id: yup.number().integer().required().moreThan(0),  
       
    })),

     }));
    


export const getbyId = async (req: Request <IparamProps>, res :Response) => { //em Icidade, estou tipando por que e o terceiro parametro

if(!req.params.id){
    return res.status(StatusCodes.BAD_REQUEST).json({
        errors:{
            default:'voce precisa digitar o ID'
        }
    })
}

const result = await cidadesProvider.Getbyid(req.params.id);
if(result instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors:{
            default:result.message
        }
    })
}
   

return res.status(StatusCodes.OK).send(result);

   
}

