/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface Icidade {  // aqui estou tipando os dados, e estruturando eles

    nome: String;
    
   
} 
//tipando os dados para os schemas


// const bodyValidation: yup.Schema<Icidade> = yup.object().shape({ //usando a biblioteca yup para validação
//     nome: yup.string().required().min(4), //  aqui estao os dados que serao verificados
//     estado: yup.string().required().min(3)

// });

// export const createValidation = validation({
//     body:bodyValidation
// });

export const createValidation = validation((getschema) => ({
    body:getschema<Icidade>(yup.object().shape({ //usando a biblioteca yup para validação
        nome: yup.string().required().min(4), //  aqui estao os dados que serao verificados
       
    })),

     }));
    


export const create  = async (req: Request <{}, {}, Icidade>, res :Response) => { //em Icidade, estou tipando por que e o terceiro parametro

   

console.log(req.body);

    return res.status(StatusCodes.CREATED).json(1);
};

