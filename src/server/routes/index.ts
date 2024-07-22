import {StatusCodes} from "http-status-codes";
import { Router } from "express";
import controller from "../controller/controller";


const router =  Router();

router.post('/teste/'
    , (req,res) =>  {
   
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
     
    }
)
    
    

export {router};