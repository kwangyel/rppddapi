import {Router} from 'express';
import jwt from 'jsonwebtoken';
import config from '../config'
import loginController from '../controllers/loginController';
import pestController from '../controllers/pestController';


const router=Router();

router.use((req,res,next)=>{
	var token=req.header("Authorization");

	if(token){
		jwt.verify(token,config.secret,(err,decoded)=>{
			if(err){
				return res.json({message:'invalid token'});
				console.log('invaldi token');
			}else{
				req.decoded=decoded;
				next();
			}
		});
	}else{
		res.send({
			message:'No token provided'
		});
		console.log('No token provided');
	}
});


router.get('/test',loginController.getHash);
router.post('/add',pestController.addPest);
router.put('/update/:id',pestController.updatePest);
router.delete('/delete/:id',pestController.deteledPest);

export default router;