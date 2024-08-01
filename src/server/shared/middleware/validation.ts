
import {  RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import {  Maybe, ObjectSchema,  ValidationError, AnyObject} from "yup"; 

type Tproperty = 'body' | 'header' | 'params' | 'query'; // o Tproperty ele vai conter os valores dados apos o simbolo =

type Tgetschema = <T extends Maybe<AnyObject>> (schema: ObjectSchema<T>) => ObjectSchema<T> //Estou Obrigando a Tipagem do Schema
//estou falando pro typescript que eu o dado que eu quero receber deve ser tipado
//na minha interface estou tipando esse dado
//e preciso importar

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type tallschemas=Record<Tproperty, ObjectSchema<any>>;  // informando os campos do objeto

type Tgetallschemas = (getSchema: Tgetschema) => Partial<tallschemas>;

 type tvalidation = (getallschemas:Tgetallschemas) => RequestHandler; // como se fosse uma interface

//Tgetallschemas =parametro[]
//getallschemas = paramatro do tipo TgetSchema
//Tgetallschemas= e um tipo que recebe uma funcao que recebe como parametro o getSchema com o tipo Tgetschema
// que a funcao pega um valor que foi passado 

export const validation: tvalidation = (Tgetallschemas)   => async (req, res, next) =>  {
    const schemas =Tgetallschemas( schema => schema);
 
    const errorsResult: Record<string,Record<string, string>> = {};
    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as Tproperty], { abortEarly: false});
        } catch (err) {
            const yupError = err as ValidationError;
            const errors: Record<string, string> = {};
            yupError.inner.forEach(error => {
                if(error.path === undefined) return;
                errors[error.path]=error.message;
                
            });
            errorsResult[key]= errors;
            
            // return next();
        }
    });
    //  
    if(Object.entries(errorsResult).length === 0) {
        return next();
        
        
    } else {
        
return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
}



   };
