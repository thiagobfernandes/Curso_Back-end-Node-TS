import { Knex } from "../../knex";
import { EtableNames } from "../../knex/ETableNames";
import { ICidade, Ipessoa } from "../../models";

export const UpdateByid = async ( id:number ,pessoa:Omit<Ipessoa, 'id'>):Promise<void | Error> => {
    try{
        const [{count}] = await Knex(EtableNames.cidades)
        .where('id', '=' , pessoa.cidadeId)
        .count<[{count: number}]>('* as count');

        if(count === 0){
            return new Error(' a cidade usada nao foi encontrada');
        }

        const result = await Knex(EtableNames.pessoas)
        .update(pessoa)
        .where('id', '=', id);

        if(result > 0) return;

        return new Error('erro ao atualizar registro')





  

    } catch(error){
        console.log(error);
        return new Error('Erro ao atualizar registro');

    }
}



