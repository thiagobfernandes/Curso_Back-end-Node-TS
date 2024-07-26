import { StatusCodes } from "http-status-codes";
import { testserver } from "../jest.setup";


describe('Cidade - Update', () => {

it('Update  pelo id', async () => {
   const res1 = await testserver.post('/cidades').send({nome:'Tupassi'});
   expect(res1.statusCode).toEqual(StatusCodes.CREATED);
   

   const resAtualizada = await testserver.put(`/cidades/${res1.body}`).send({nome:"thiago"});
   expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT)
   

   

});

it('tentar apagar algo que nao existe', async () => {
   const res1= await testserver.put('/cidades/9999').send({nome:"thiago"});
   expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
   expect(res1.body).toHaveProperty('errors.default');

}); 
});
