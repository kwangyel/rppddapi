import {Router} from 'express';
import piccontroller from '../controllers/piccontroller';

const router=Router();

router.get('/:pestid',piccontroller.getPicById);

export default router;
