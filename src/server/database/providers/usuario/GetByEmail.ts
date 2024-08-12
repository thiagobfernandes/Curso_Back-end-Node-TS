import { EtableNames } from "../../knex/ETableNames";
import { Iusuario } from "../../models";
import { Knex } from "../../knex";

export const GetByEmail = async(email:string):Promise<Iusuario | Error> => {
    try{
        const result = await Knex(EtableNames.usuarios).select('*')
        .where('email', '=', email).first();
        if(result){
            return result;
        } else{
            return new Error("Erro ao buscar Registro");

        }

        
    } catch(error){
        console.log(error);
        return new Error("Erro ao Buscar Registro");
    }

    
    

}
