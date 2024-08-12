import { UsuariosProvider } from "../../database/providers/usuario";
import { Iusuario } from "../../database/models";
import * as yup from 'yup';
import { JWTservice, validation } from "../../shared/middleware";
import { Response,Request } from "express";
import { StatusCodes } from "http-status-codes";
import { PasswordCrypto } from "../../shared/service";


interface IBodyProps extends Omit<Iusuario,'id' | 'nome'> {
    
}

export const GetbyEmailvalidation = validation((Getemail) => ({
    body:Getemail<IBodyProps>(yup.object().shape({
        email:yup.string().required().min(6),
        password:yup.string().required().min(4),
    })), // estou enviando os dados pelo body pela causa de criptografia e seguranca
        // dados sensiveis sempre sao pelo body
}))
// (req: Request<Iparams>, res:Response) aqui estou falando que a req tem que ser do tipo email string
export const SignIn = async (req: Request<{}, {}, IBodyProps>, res:Response) => {
    

    const {email, password} = req.body;

    const usuario = await UsuariosProvider.GetByEmail(email); // consultando usuario no banco

 if(usuario instanceof Error){
    return res.status(StatusCodes.UNAUTHORIZED).json({
        errors:{
            default:"email ou senha invalidos"
        }
    });

 }  

const PasswordMatch  =  await PasswordCrypto.verifyPassword(password, usuario.password) // aqui estou comparando as senhas
 
 if(!PasswordMatch){
    return res.status(StatusCodes.UNAUTHORIZED).json({
        errors:{
            default:"Erro de gerar o token de acesso"
        } 
    }) 

 } else {

    const accessToken = JWTservice.sign({uid: usuario.id})

    if(accessToken === 'JWT_SECRET_NOT_FOUND') {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default:"email ou senha invalidos"
            } 
        }) 

    }




  return res.status(StatusCodes.OK).json({accessToken})
 }
 
}


 