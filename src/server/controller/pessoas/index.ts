
import * as createPessoas from './Create'
import * as deletebyid from './DeleteById'
import * as getAll from './Getall'
import * as GetbyId from './GetById'
import * as UpdatePessoas from './UpdateById'

export const PessoasController = {
    ...createPessoas,
    ...deletebyid,
    ...getAll,
    ...GetbyId,
    ...UpdatePessoas


}