import {Router} from 'express';
// import cache from '../utils/cache';
import referenceContoller from '../controllers/referenceController';

const router=Router();


router.get('/:pestid',referenceContoller.getReferenceId);

export default router;
