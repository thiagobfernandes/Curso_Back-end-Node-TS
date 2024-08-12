import { Knex } from "../../knex";
 import { EtableNames } from "../../knex/ETableNames";
import { Ipessoa } from "../../models";

 export const Getall = async (page: number, limit:number, filter:string): Promise<Ipessoa[] | Error> =>  {
try{
 const result = await Knex(EtableNames.pessoas)
 .select('*')
 .where('nome','like', `%${filter}%`)
 .offset((page -1) * limit)
 .limit(limit);
                                                                                                                            
return result;


} 
 catch(error){
    
console.log(error);
return new Error("Erro ao Acessar os Registros");

}
 }





