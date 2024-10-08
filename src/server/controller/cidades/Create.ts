/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { ICidade } from "../../database/models";
import { cidadesProvider } from "../../database/providers/cidades";




interface IBodyProps extends Omit<ICidade, 'id'>{  // omitindo os dados por que nao faz sentido requisitar o ID
    

} 


export const createValidation = validation((getschema) => ({
    body:getschema<IBodyProps>(yup.object().shape({ //usando a biblioteca yup para validação
        nome: yup.string().required().min(4), //  aqui estao os dados que serao verificados
       
    })),

     }));
    


export const create  = async (req: Request <{}, {}, IBodyProps>, res :Response) => { //em Icidade, estou tipando por que e o terceiro parametro
 
 console.log('IdUsuario', req.headers.idUsuario);
 
    const result = await cidadesProvider.create(req.body);
 if(result instanceof Error){ // se tiver uma instacia de erro enviar um status code de erro
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors:{
            default: result.message
        }
    });
 }
   



    return res.status(StatusCodes.CREATED).json(result);
};

