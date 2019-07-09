import commentService from '../services/commentService';
import Util from '../utils/Utils';

const util=new Util();

class commentContoller{
	static async getAllComments(req,res){
		try{
			const allcomments=await commentService.getAllComments();
			if(allcomments.length > 0){
				util.setSuccess(200,'Pests Retrieved',allcomments);
			}else{
				util.setSuccess(200,'No pests found');
			}
			return util.send(res);
		}catch(error){
			util.setError(400,error);
			return util.send(res);
		}
	}

	static async addComments(req,res){
		
		if(!req.body.email){
			util.setError(400,'Please provide email');
			return util.send(res);
        }
        if(!req.body.comment){
			util.setError(400,'Please provide comment');
			return util.send(res);
        }
        if(!req.body.pest_id){
			util.setError(400,'Please provide pestid');
			return util.send(res);
		}

		const newComment=req.body;
		try{
			const createdComment=await commentService.addComments(newComment);
			util.setSuccess(201,'Pest Added',createdComment);
			return util.send(res);
		}catch(error){
			util.setError(400,error.message);
			return util.send(res);
		}
    }
    
    static async getCommentsId(req,res){
		const {pestid}=req.params;

		if(!Number(pestid)){
			util.setError(404,'Please input valid pestid');
			return util.send(res);
		}

		try{
			const theComments=await commentService.getCommentsId(pestid);

			if(!theComments){
				util.setError(404,`cannot find pest with id ${pestid}`);
			}else{
				util.setSuccess(200,'Found the Pest',theComments);
			}
			return util.send(res);
		}catch(error){
			util.setError(404,error);
			return util.send(res);
		}
	}

	
}

export default commentContoller;
