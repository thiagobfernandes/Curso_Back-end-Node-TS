/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface Icidade {  // aqui estou tipando os dados, e estruturando eles

    nome: String;
    cep:Number;
    
} 

const bodyValidation: yup.Schema<Icidade> = yup.object().shape({ //usando a biblioteca yup para validação
    nome: yup.string().required().min(4), //  aqui estao os dados que serao verificados
    cep: yup.number().required()

})



export const create = async (req: Request <{}, {}, Icidade>, res :Response) => { //em Icidade, estou tipando por que e o terceiro parametro

    let validateData: Icidade | undefined = undefined;  // aqui crei uma variavel para armazenar dos dados que serao validados
try {
    validateData =  await bodyValidation.validate(req.body); 
} catch (error) {

const yupError = error as yup.ValidationError; // estou verificando  o erro

return res.json({erros: { // aqui estu enviando uma mensagem pro front-end sobre o erro, um objeto erro que contem o atributo com a mensagem do erro
    default:yupError.message,
}});
 
};

console.log(validateData);

    


    return res.send('Criei');
}

