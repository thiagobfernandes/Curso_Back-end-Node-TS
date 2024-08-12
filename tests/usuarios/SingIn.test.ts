import { StatusCodes } from "http-status-codes";
import {testserver} from "../jest.setup"
jest.setTimeout(10000);


describe('Usuario entrar - SignIn', () => {

     it('Erro ao entrar na conta', async () => {
        const res1= await testserver.post('/cadastrar').send({email:"thiaguinho@gmail.com", password:"thiaguera10",
        nome:"Thiagobfer",
        })   
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const result = await testserver.post('/entrar').send({email:"thiaguersa@gmail.com", password:"tigasd"})
        expect(result.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
        expect(result.body).toHaveProperty('errors.default');
     })

     it('Entrar na conta', async () => {
      const res1= await testserver.post('/cadastrar').send({email:"tilandod@gmail.com", password:"thiaguera10",
      nome:"Thiagobfer",
      })   
      expect(res1.statusCode).toEqual(StatusCodes.CREATED);

      const result = await testserver.post('/entrar').send({email:"tilandod@gmail.com", password:"thiaguera10"})
      expect(result.statusCode).toEqual(StatusCodes.OK);
      expect(result.body).toHaveProperty('accessToken');
   })


   






})