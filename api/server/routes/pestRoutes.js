import {Router} from 'express';
import pestController from '../controllers/pestController';
// import cache from '../utils/cache';

const router=Router();

router.get('/',pestController.getAllPests);
router.post('/',pestController.addPest);
// router.get('/pestGist',cache.checkResponseCache,pestController.pestGist,cache.addResponseToCache);
router.get('/pestGist',pestController.pestGist);
router.get('/search',pestController.searchPest);
router.get('/category/:cat',pestController.category);
router.get('/:id',pestController.getAPest);
router.put('/:id',pestController.updatePest);
router.delete('/:id',pestController.deteledPest);


export default router;
