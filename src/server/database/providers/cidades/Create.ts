import  { Knex } from "../../knex";
import { EtableNames } from "../../knex/ETableNames";
import { ICidade } from "../../models";

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> => {
    try{
      const [result] = await Knex(EtableNames.cidades).insert(cidade).returning('id'); // recebendo o dado tipado compo parametro la emcima (cidade: Omit<ICidade, 'id'>)
           if(typeof result === 'object')  {
            return result.id; // se retornar um objeto eu pego o id desse objeto
           }else if (typeof result === 'number') {
            return result; 
           }         
           
           return new Error('Erro ao cadastrar o registro')
        return 1; // se a funcao tentar fazer alguma coisa ele vai retornar o ID na insercao ou seja retorna numerico
    } catch(error) { // se ele nao conseguir ele vai retornar erro

        console.log(error);
        return Error('Erro a cadastrar o registro');

    }





};

// (cidade: Omit<ICidade, 'id'>) vai receber o tipo de dados de uma cidade como nomes 