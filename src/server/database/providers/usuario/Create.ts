import { EtableNames } from "../../knex/ETableNames";
import { Iusuario } from "../../models";
import { Knex } from "../../knex";

export const create = async(usuario: Omit<Iusuario, 'id'>): Promise<number | Error> => {
    try{
        const [result] = await Knex(EtableNames.usuarios).insert(usuario).returning('id');
        if(typeof result === 'object'){
            return result.id;
        } else if (typeof result === 'number'){
            return result;
        }
        
        return new Error("erro ao cadastrar o usuario");
    } catch(error){
        console.log(error);
        return new Error(' Erro ao cadastrar usuario');
    }
}