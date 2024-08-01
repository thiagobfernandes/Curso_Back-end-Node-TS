/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, RequestHandler, Response, query } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { ICidade } from "../../database/models";
import { cidadesProvider } from "../../database/providers/cidades";


interface IbodyProps extends Omit<ICidade, 'id'>{ }
interface IparamProps{
    id?: number; // obrigatorio   
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
if(!req.params.id ){
    return res.status(StatusCodes.BAD_REQUEST).json({
        errors:{
            default:"voce precisa inserir um id ou nome",
        }
    })
}

    const result = await cidadesProvider.UpdateByid(req.params.id, req.body);
    if(result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default:result.message
            }
        })
    }

    



  return res.status(StatusCodes.NO_CONTENT).json(result)

        
    


    


    
}

// const bodyValidation: yup.Schema<Icidade> = yup.object().shape({ //usando a biblioteca yup para validação
//     nome: yup.string().required().min(4), //  aqui estao os dados que serao verificados
//     estado: yup.string().required().min(3)

// });

// export const createValidation = validation({
//     body:bodyValidation
// });