import { testserver } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe('Pessoas - GetAll',  () => {
let cidadeId: number | undefined = undefined;
beforeAll(async () => {
const resCidade = await testserver.post('/cidades').send({ nome:'teste2'});

cidadeId = resCidade.body;

});

it('Busca registro', async () => {
    const res1 = await testserver
    .post('/pessoas').send({
        cidadeId,
        email:'jucegetal2l@smgmaisl.com',
        nome:'Juce2 sssimlva'
    });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada= await testserver
    .get('/pessoas').send()
    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);

})
})