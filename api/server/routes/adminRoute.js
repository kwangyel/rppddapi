import {Router} from 'express';
import pestController from '../controllers/pestController';
import loginController from '../controllers/loginController';
import jwt from 'jsonwebtoken';
import config from '../config'

// import cache from '../utils/cache';

const router=Router();

router.post('/login',loginController.login);

export default router;
