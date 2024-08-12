import { testserver } from "../jest.setup";
import { StatusCodes } from "http-status-codes";



describe('cidades - delete',() => {

    it('criando para apagar', async () => {
      const res1= await testserver.post('/cidades').send({nome:'tupassi'});

            expect(res1.statusCode).toEqual(StatusCodes.CREATED);

            const resApagada = await testserver.delete(`/cidades/${res1.body}`).send()
            

            expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);

       });

       it('tentar apagar algo que nao existe', async () => {
        const apagar= await testserver.delete('/cidades/9999').send();
        expect(apagar.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(apagar.body).toHaveProperty('errors.default');
       });


});