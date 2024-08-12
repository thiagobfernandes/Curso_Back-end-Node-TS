import { StatusCodes } from "http-status-codes";
import {testserver} from "../jest.setup"
jest.setTimeout(10000);


describe('Criar Conta - SignIn', () => {


    it('Criar conta', async () => {
        const res1= await testserver.post('/cadastrar').send({email:'riquelmee@gmail.com', password:"thiagobfer", nome:"thiaguera10"})
        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(res1.body).toHaveProperty('number')

    })

     it('Erro ao Criar conta', async () => {
        const res1= await testserver.post('/cadastrar').send({email:"viv", password:"thiag",
        nome:"Thia",
        })   
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
     })

  

     


   






})