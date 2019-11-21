import {Router} from 'express';
import piccontroller from '../controllers/piccontroller';
import multer from 'multer';
import fs  from 'fs';

const router=Router();
const path=process.env.STATIC;
const upload=multer({dest:path});

router.get('/:pestid',piccontroller.getPicById);
router.post('/upload',upload.single('photo'),(req,res)=>{
	try{
		var tmp_path=req.file.path;
		var target_path=path+req.file.originalname;

		var src=fs.createReadStream(tmp_path);
		var dest=fs.createWriteStream(target_path);
		src.pipe(dest);
		src.on('end',()=>{res.json({
			"status": "success",
			"filename": req.file.originalname
		})});
		src.on('error',()=>{res.json({
			"status": "error uploading file"
		})});
		
	}catch(error){
		res.send(error);
	}
});

export default router;
