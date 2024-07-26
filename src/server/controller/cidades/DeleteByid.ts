/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface IdeleteProps{
    id?: number; // obrigatorio
 
    
}
//paginacao

export const DeletebyidValidation = validation((getschema) => ({
    params:getschema<IdeleteProps>(yup.object().shape({ 
        id: yup.number().integer("o numero deve ser inteiro").required("Preencha esse campo").moreThan(0),  
       
    })),

     }));
    


export const DeleteByid = async (req: Request <IdeleteProps>, res :Response) => { //em Icidade, estou tipando por que e o terceiro parametro

   
if(Number(req.params.id) === 9999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors:{
        default:'Registro nao encontrado'
    }
});
    


    return res.status(StatusCodes.NO_CONTENT).send();
}

