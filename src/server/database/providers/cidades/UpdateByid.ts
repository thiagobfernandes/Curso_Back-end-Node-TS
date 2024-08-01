import { Knex } from "../../knex";
import { EtableNames } from "../../knex/ETableNames";
import { ICidade } from "../../models";

export const UpdateByid = async ( id:number ,cidade:Omit<ICidade, 'id'>):Promise<void | Error> => {
    try{
    const atualizar = await Knex(EtableNames.cidades).update(cidade).where('id', '=', id);
    if(atualizar > 0) return;
    return new Error('Erro ao atualizar registro')

    } catch(error){
        console.log(error);
        return new Error('Erro ao atualizar registro');

    }
}



