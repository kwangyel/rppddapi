import {Router} from 'express';
// import cache from '../utils/cache';
import commentContoller from '../controllers/commentController';

const router=Router();

router.post('/',commentContoller.addComments);
router.get('/:pestid',commentContoller.getCommentsId);

export default router;
