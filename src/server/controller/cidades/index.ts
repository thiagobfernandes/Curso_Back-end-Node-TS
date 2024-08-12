import *  as  create from './Create'
import *  as  GetAll from './GetAll'
import *  as  getbyid from './Getbyid'
import *  as  updateById from './UpdateByid'
import *  as  DeleteByid from './DeleteByid'


export const cidadesController = {
    ...create,
    ...GetAll,
    ...getbyid,
    ...updateById,
    ...DeleteByid
}



