import { testserver } from "../jest.setup";
import { StatusCodes } from "http-status-codes";



describe('cidades - delete',() => {
  let cidadeId: number | undefined = undefined
  beforeAll(async () => {
    const resCidade = await testserver.post('/cidades').send({ nome:'tesmte'});
    
    cidadeId = resCidade.body;
    
    });
    it('apaga registro', async() => {
      const res1= await testserver.post('/pessoas').send({
        cidadeId,
        email:"jucedelesta@gmmails.com",
        nome:'jogadormss nato',
      })
      expect(res1.statusCode).toEqual(StatusCodes.CREATED);

      const resApagada = await testserver.delete(`/pessoas/${res1.body}`).send();
      expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('tentar apagar registro que nao existe', async() => {
      const res1= await testserver.delete('/pessoas/99999').send();

      expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(res1.body).toHaveProperty('errors.default');
    })

});