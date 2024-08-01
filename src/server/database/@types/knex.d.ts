import { ICidade } from "../models";

declare module 'knex/types/tables' {
    interface Tables {
        cidade: Icidade
        //cidade: Ipessoa
        //cidade: Iusuario
    }
}