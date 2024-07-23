/* eslint-disable @typescript-eslint/no-unused-vars */
import {StatusCodes} from "http-status-codes";
import { Router } from "express";
import {cidadesController} from './../controller'; // aqui estou pegando os dados ce cidades/index.ts



const router =  Router();




router.post('/cidades', cidadesController.create);
    
    

export {router};