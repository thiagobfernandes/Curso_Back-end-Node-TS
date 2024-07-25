/* eslint-disable @typescript-eslint/no-unused-vars */
import {StatusCodes} from "http-status-codes";
import { Router } from "express";
import {cidadesController} from './../controller'; // aqui estou pegando os dados ce cidades/index.ts



const router =  Router();




router.get('/cidades', cidadesController.getAllValidation, cidadesController.getAll);
router.get('/cidades/:id', cidadesController.getByidvalidation, cidadesController.getbyId);
router.put('/cidades/:id', cidadesController.updateByidValidation, cidadesController.updateById);
router.delete('/cidades/:id', cidadesController.DeletebyidValidation, cidadesController.DeleteByid);
router.post('/cidades', cidadesController.createValidation, cidadesController.create);
    
    

export {router};