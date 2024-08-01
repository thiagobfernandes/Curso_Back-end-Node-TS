/* eslint-disable @typescript-eslint/no-unused-vars */
 
import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { cidadesProvider } from "../../database/providers/cidades";
import { ICidade } from "../../database/models";

interface IdeleteProps  {
    id?: number; // obrigatorio
 
}
//paginacao

export const DeletebyidValidation = validation((getschema) => ({
    params:getschema<IdeleteProps>(yup.object().shape({ 
        id: yup.number().integer("o numero deve ser inteiro").required("Preencha esse campo").moreThan(0),  
       
    })),

     }));
    


export const DeleteByid = async (req: Request <IdeleteProps>, res :Response) => { //em Icidade, estou tipando por que e o terceiro parametro

    if( ! req.params.id){ // esse if estou fazendo com que o id tenha que ser do tipo numerico
      return  res.status(StatusCodes.BAD_REQUEST).json({
            errors:{
                default:'O Parametro ID precisa ser informado'
            }
        })
    }

   const result = await cidadesProvider.DeleteByid(req.params.id);
   if(result instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors:{
            default: result.message
        }
    });
   }



    return res.status(StatusCodes.NO_CONTENT).send( result + "registro apagado com sucesso");
}

