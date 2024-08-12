import { EtableNames } from "../../knex/ETableNames";
import { Knex } from "../../knex";

export const count = async (filter:string): Promise<number | Error> => {
    try{
        const [{count}] = await Knex(EtableNames.pessoas)
        .where('nome', 'like', `%${filter}%`)
        .count<[{count : number}]>('* as count');
        
            if(Number.isInteger(Number(count))) return Number(count);
            return new Error('erro ao consultar quantidade total de registros');
    }
    catch(error){
        console.log(error);
        return new Error('Erro ao consultar quantidade total de registros')

    }
}