import *  as  create from './Create'
import *  as  GetAll from './Getall'
import *  as  getbyid from './GetById'
import *  as  updateById from './UpdateById'
import *  as  DeleteByid from './DeleteById'
import * as count from './Count'


export const PessoasProvider = {
   ...create,
    ...GetAll,
   ...getbyid,
   ...updateById,
   ...DeleteByid,
   ...count
}

// cidadesController.create;
// cidadesController.ycreateValidation; // aqui estou exportando os dados do Create