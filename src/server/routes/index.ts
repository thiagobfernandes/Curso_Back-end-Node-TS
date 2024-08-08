/* eslint-disable @typescript-eslint/no-unused-vars */
import {StatusCodes} from "http-status-codes";
import { Router } from "express";
import {cidadesController} from './../controller';
import { PessoasController } from "./../controller";
import { UsuarioController } from "./../controller";



const router =  Router();


router.post('/entrar', UsuarioController.GetbyEmailvalidation, UsuarioController.SignIn);
router.post('/cadastrar', UsuarioController.UsuarioValidation, UsuarioController.SignUp)




router.get('/pessoas', PessoasController.getAllValidation, PessoasController.getAll)
router.post('/pessoas',PessoasController.CreateValidation, PessoasController.createPessoas)
router.get('/pessoas/:id', PessoasController.GetByIdValidation, PessoasController.GetbyId)
router.put('/pessoas/:id',PessoasController.updateValidation, PessoasController.UpdatePessoas)
router.delete('/pessoas/:id', PessoasController.DeleteByIdValidation, PessoasController.deletebyid);




router.get('/cidades', cidadesController.getAllValidation, cidadesController.getAll);
router.get('/cidades/:id', cidadesController.getByidvalidation, cidadesController.getbyId);
router.put('/cidades/:id', cidadesController.updateByidValidation, cidadesController.updateById);
router.delete('/cidades/:id', cidadesController.DeletebyidValidation, cidadesController.DeleteByid);
router.post('/cidades', cidadesController.createValidation, cidadesController.create);
    // teste de integracao
    

export {router};