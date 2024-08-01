import { Knex } from "../../knex";
 import { EtableNames } from "../../knex/ETableNames";
import { ICidade } from "../../models";

 export const Getall = async (page: number, limit:number, filter:string, id = 0  ): Promise<ICidade[] | Error> =>  {
try{
 const result = await Knex(EtableNames.cidades).select('*').where('id',Number(id)).orWhere('nome','like', `%${filter}%`).offset((page -1) * limit).limit(limit);
if (id > 0 && result.every(item => item.id !==id)) {
    const resultbyid= await Knex(EtableNames.cidades).select('*').where('id', '=', id).first
    // ou seja se o banco de dados nao encontrou o id no primeiro registro significa que ou ele nao existe
    // ou ele nao esta na pagina, se isso acontecer vou procurar especificamente o id que recebi no banco de dados e jogar ele la em cima
    // nos registros

    if(resultbyid) return [...result, resultbyid];
}
                                                                                                                            

return result;


} 
 catch(error){
    
console.log(error);
return new Error("Erro ao Acessar os Registros");

}
 }





