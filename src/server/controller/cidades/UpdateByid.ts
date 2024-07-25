/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface IparamProps{
    id?: number; // obrigatorio   
}
interface IbodyProps{
    nome:string
}
//paginacao

export const updateByidValidation = validation((getschema) => ({
   
    body:getschema<IbodyProps>(yup.object().shape({ 
        nome:yup.string().required("Preencha esse campo").min(3, "Deve conter no minimo 3 characteres"),  
       
    })),

   
    params:getschema<IparamProps>(yup.object().shape({ 
        id: yup.number().integer("o valor deve ser inteiro").required("Preencha esse campo").moreThan(0),  
       
    })),
 

     }));
    


export const updateById = async (req: Request <IparamProps, {}, IbodyProps>, res :Response) => { //em Icidade, estou tipando por que e o terceiro parametro

   

console.log(req.params)
console.log(req.body)

    


    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('nao implementado');
}

// const bodyValidation: yup.Schema<Icidade> = yup.object().shape({ //usando a biblioteca yup para validação
//     nome: yup.string().required().min(4), //  aqui estao os dados que serao verificados
//     estado: yup.string().required().min(3)

// });

// export const createValidation = validation({
//     body:bodyValidation
// });