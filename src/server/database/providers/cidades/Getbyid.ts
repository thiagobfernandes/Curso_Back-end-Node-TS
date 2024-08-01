import { Knex } from "../../knex";
 import { EtableNames } from "../../knex/ETableNames";
import { ICidade } from "../../models";

 export const Getbyid = async (id:number):Promise<ICidade|Error> => {
    try{
    const result = await Knex(EtableNames.cidades).select('*').where('id', '=', id).first();
    if(result) return result;
    return new Error('registro nao encontrado');
} catch(error) {
    console.log(error);
    return new Error('registro nao encontrado');
    


}

 }





