import { Knex } from "../../knex";
 import { EtableNames } from "../../knex/ETableNames";


 export const DeleteByid = async (id:number):Promise<void | Error> => {
    try{
    const result = await Knex(EtableNames.pessoas).where('id', '=', id).del();
    if(result > 0) return ;
    return new Error('Erro ao deletar a  cidade');
} catch(error) {
    console.log(error);
    return new Error('Erro ao deletar registro');
    


}

 }





