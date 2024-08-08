import { StatusCodes } from "http-status-codes";
import { testserver } from "../jest.setup";


describe('Pessoas - Update', () => {
   let cidadeId: number | undefined = undefined
    beforeAll(async () => {
       const resCidade = await testserver.post('/cidades').send({nome:'testsed'});
 
       cidadeId=resCidade.body;
 
    })
    it('Atualiza registro', async() => {
      const res1 = await testserver.post('/pessoas').send({
         cidadeId,
         nome:'juquinhsa',
         email:'jucaupdate@gmailsm.com',
      });

      expect(res1.statusCode).toEqual(StatusCodes.CREATED);
      const resAtualizada = await testserver.put(`/pessoas/${res1.body}`).send({
         cidadeId,
         nome:'juquinsha',
         email:'jucasilvam@gmsail.com'
      })

      expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    })




    it('tenta atualizar registro que nao existe', async() => {
      const res1= await testserver.put('/pessoas/99999').send({
         cidadeId,
         email:'jucaupdae@gmailsms.com',
         nome:'jucasilvestssrem',
      });
      expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
      expect(res1.body).toHaveProperty('errors.default');
    });


});
