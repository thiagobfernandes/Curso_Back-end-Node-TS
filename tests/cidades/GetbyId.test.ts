import { StatusCodes } from "http-status-codes";
import { testserver } from "../jest.setup";


describe('Cidade - Getid', () => {

it('busca registro pelo id', async () => {
   const res1 = await testserver.post('/cidades').send({nome:'Tupassi'});
   expect(res1.statusCode).toEqual(StatusCodes.CREATED);
   

   const resBuscada = await testserver.get(`/cidades/${res1.body}`).send();
   expect(resBuscada.statusCode).toEqual(StatusCodes.OK)
   expect(resBuscada.body).toHaveProperty('nome');

   

});

it('tentar apagar algo que nao existe', async () => {
   const res= await testserver.get('/cidades/9999').send();
   expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
   expect(res.body).toHaveProperty('errors.default');

}); 
});
