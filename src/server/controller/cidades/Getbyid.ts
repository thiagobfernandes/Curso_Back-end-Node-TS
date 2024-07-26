/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

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

   

console.log(req.params)

  
if(Number(req.params.id) === 9999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors:{
        default:'registro nao encontrado'
    }
});
    


    return res.status(StatusCodes.OK).json({
        id: req.params.id,
        nome:'caxias do sul',
    });
    


   
}

// const bodyValidation: yup.Schema<Icidade> = yup.object().shape({ //usando a biblioteca yup para validação
//     nome: yup.string().required().min(4), //  aqui estao os dados que serao verificados
//     estado: yup.string().required().min(3)

// });

// export const createValidation = validation({
//     body:bodyValidation
// });