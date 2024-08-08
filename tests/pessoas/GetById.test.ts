import { testserver } from "../jest.setup";
import { StatusCodes } from "http-status-codes";


describe('Pessoas GetByID', () => {
    let cidadeId: number | undefined = undefined
    beforeAll(async () => {
       const resCidade = await testserver.post('/cidades').send({nome:'testemv'});
 
       cidadeId=resCidade.body;
 
    })
    it('buscar id', async() => {
        const res1= await testserver.post('/pessoas').send({
            cidadeId,
            nome:'jucasralmsho',
            email:'jucanalhassbyid@gmmail.com',
        });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testserver.get(`/pessoas/${res1.body}`).send();
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscada.body).toHaveProperty('nome');
    });




    it('tentar buscar registro que nao existe', async () => {
        const res1= await testserver.get('/pessoas/999999').send();
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    })

   








})