import { StatusCodes } from "http-status-codes";
import { testserver } from "../jest.setup";

describe('Pessoas - Create', () => {
    let cidadeId: number | undefined = undefined
  beforeAll(async () => {
    const resCidade = await testserver.post('/cidades').send({ nome:'teste2'});
    
    cidadeId = resCidade.body;
    
    });
    it('criando arquivo', async() => {
        const res1= await testserver.post('/pessoas').send({
            cidadeId,
            nome:'thiagsuinhobonistinho2',
            email:'thiagoscreaste@gmail.cmom',
        })
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    })

    it('validando dados', async() => {
        const res = await testserver.post('/pessoas').send({
            cidadeId,
            nome:'th',
            email:null,
        })
        expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        
    })
   
})