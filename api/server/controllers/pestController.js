import pestService from '../services/pestService';
import Util from '../utils/Utils';

const util=new Util();

class pestController{
	static async getAllPests(req,res){
		try{
			const allPests=await pestService.getAllPests();
			if(allPests.length > 0){
				util.setSuccess(200,'Pests Retrieved',allPests);
			}else{
				util.setSuccess(200,'No pests found');
			}
			return util.send(res);
		}catch(error){
			util.setError(400,error);
			return util.send(res);
		}
	}

	static async addPest(req,res){
		console.log(req.body.name);
		if(!req.body.name){
			util.setError(400,'Please provide the pest name');
			return util.send(res);
		}

		const newPest=req.body;
		try{
			const createdPest=await pestService.addPest(newPest);
			util.setSuccess(201,'Pest Added',createdPest);
			return util.send(res);
		}catch(error){
			util.setError(400,error.message);
			return util.send(res);
		}
	}

	static async updatePest(req,res){
		const alteredPest=req.body;
		const {id}=req.params;
		if(!Number(id)){
			util.setError(400,'Please a valid ID');
			return util.send(res);
		}
		try{
			const updatePest=await pestService.updatePest(id,alteredPest);
			if(!updatePest){
				util.setError(404,`Cannot find pest of id ${id}`);
			}else{
				util.setSuccess(200,'Pest Updated',updatePest);
			}
			return util.send(res);
		}catch(error){
			util.setError(404,error);
			return util.send(res);
		}
	}

	static async getAPest(req,res){
		const {id}=req.params;

		if(!Number(id)){
			util.setError(404,'Please input valid id');
			return util.send(res);
		}

		try{
			const thePest=await pestService.getAPest(id);

			if(!thePest){
				util.setError(404,`cannot find pest with id ${id}`);
			}else{
				util.setSuccess(200,'Found the Pest',thePest);
			}
			return util.send(res);
		}catch(error){
			util.setError(404,error);
			return util.send(res);
		}
	}

	static async deteledPest(req,res){
		const {id}=req.params;

		if(!Number(id)){
			util.setError(400,'Please provide a valid id');
			return util.send(res);
		}

		try{
			const pestToDelete=await pestService.deletePest(id);

			if(pestToDelete){
				util.setSuccess(200,'Pest Deleted');
			}else{
				util.setError(404,`Pest with id ${id} cannot be deleted`);
			}

			return util.send(res);
		}catch(error){
			util.setError(400,error);
			return util.send(res);
		}
				
	}

	static async searchPest(req,res){
		const searchname=req.body.searchname;
		console.log(`this is the search query ${searchname}`);
		
		if(searchname===""){
			util.setError(404,'Please input valid name of scientificName');
			return util.send(res);
		}

		try{
			const thePest=await pestService.searchPest(searchname);

			if(!thePest){
				util.setError(404,`cannot find the term ${searchname}`);
			}else{
				util.setSuccess(200,'Found the Pest',thePest);
			}
			return util.send(res);
		}catch(error){
			util.setError(404,error);
			return util.send(res);
		}
	}

	static async pestGist(req,res,next){

		try{
			const pestgist=await pestService.pestGist();
			if(pestgist.length > 0){
				util.setSuccess(200,'Pests Retrieved',pestgist);
				req.data=pestgist;
			}else{
				util.setSuccess(200,'No pests found');
			}
			util.send(res);
			next();
		}catch(error){
			util.setError(400,error);
			return util.send(res);
		}

	}
}

export default pestController;
