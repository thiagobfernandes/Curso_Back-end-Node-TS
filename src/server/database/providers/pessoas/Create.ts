import  { Knex } from "../../knex";
import { EtableNames } from "../../knex/ETableNames";
import { Ipessoa} from "../../models";

export const create = async (pessoa: Omit<Ipessoa,'id'>):Promise<number | Error>  => {
    try{
        const [{count}] = await Knex(EtableNames.cidades) // aqui e para conexao entre a tabe;a cidades e nomes
        .where('id','=',pessoa.cidadeId) // precisa haver cidade id
        .count<[{count :number}]>('* as count'); 
        
        if(count === 0){
            return new Error('a cidade usada no cadastro nao foi encontrada')
        }

        const [result] = await Knex(EtableNames.pessoas).insert(pessoa).returning('id');
        if(typeof result === 'object'){
            return result.id;
        } else if(typeof result === 'number'){
            return result;
        }

        return new Error('Erro ao Registrar')
        
      
    } catch(error) { 
        console.log(error);
        return new Error('Erro ao cadastrar o registro')

    }





};

// (cidade: Omit<ICidade, 'id'>) vai receber o tipo de dados de uma cidade como nomes 