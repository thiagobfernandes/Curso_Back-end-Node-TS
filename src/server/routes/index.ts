/* eslint-disable @typescript-eslint/no-unused-vars */
import {StatusCodes} from "http-status-codes";
import { Router } from "express";
import {cidadesController} from './../controller';
import { PessoasController } from "./../controller";
import { UsuarioController } from "./../controller";
import {ensureAuthenticated} from '../shared/middleware/index'



const router =  Router();


router.post('/entrar', UsuarioController.GetbyEmailvalidation, UsuarioController.SignIn);
router.post('/cadastrar', UsuarioController.UsuarioValidation, UsuarioController.SignUp)




router.get('/pessoas', ensureAuthenticated, PessoasController.getAllValidation, PessoasController.getAll)
router.post('/pessoas', ensureAuthenticated,PessoasController.CreateValidation, PessoasController.createPessoas)
router.get('/pessoas/:id', ensureAuthenticated, PessoasController.GetByIdValidation, PessoasController.GetbyId)
router.put('/pessoas/:id', ensureAuthenticated,PessoasController.updateValidation, PessoasController.UpdatePessoas)
router.delete('/pessoas/:id', ensureAuthenticated, PessoasController.DeleteByIdValidation, PessoasController.deletebyid);




router.get('/cidades', ensureAuthenticated, cidadesController.getAllValidation, cidadesController.getAll);
router.get('/cidades/:id', ensureAuthenticated, cidadesController.getByidvalidation, cidadesController.getbyId);
router.put('/cidades/:id', ensureAuthenticated, cidadesController.updateByidValidation, cidadesController.updateById);
router.delete('/cidades/:id', ensureAuthenticated, cidadesController.DeletebyidValidation, cidadesController.DeleteByid);
router.post('/cidades', ensureAuthenticated, cidadesController.createValidation, cidadesController.create);
    // teste de integracao
    

export {router};