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
        id: yup.number().integer("o numero deve ser inteiro").required("Preencha esse campo").moreThan(0, "O numero deve ser maior que 0"),  
       
    })),

     }));
    


export const DeleteByid = async (req: Request <IdeleteProps>, res :Response) => { //em Icidade, estou tipando por que e o terceiro parametro

   

console.log(req.params)

    


    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('nao implementado');
}

// const bodyValidation: yup.Schema<Icidade> = yup.object().shape({ //usando a biblioteca yup para validação
//     nome: yup.string().required().min(4), //  aqui estao os dados que serao verificados
//     estado: yup.string().required().min(3)

// });

// export const createValidation = validation({
//     body:bodyValidation
// });