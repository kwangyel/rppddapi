import database from '../src/models';

class pestService{
	static async getAllPests(){
		try{
			return await database.pests.findAll();
		}catch(error){
			throw error;
		}
	}

	static async addPest(newPest){
		try{
			return await database.pests.create(newPest);
		}catch(error){
			throw error;
		}
	
	}

	static async updatePest(id,updatePest){
		try{
			const pestToUpdate=await database.pests.findOne({
				where: {id: Number(id)}
			});
			if(pestToUpdate){
				await database.pests.update(updatePest,{where:{id:Number(id)}});
				return updatePest;
			}
			return null;
		}catch(error){
			throw error;
		}
	}

	static async getAPest(id){
		try{
			const thePest=await database.pests.findOne({
				where:{id: Number(id)}
			});
			return thePest;
		}catch(error){
			throw error;
		}
	}

	static async deletePest(id){
		try{
			const pestToDelete= await database.pests.findOne({where:{id:Number(id)}});
			if(pestToDelete){
				const deteledPest= await database.pests.destroy({
					where: {id: Number(id)}
				});
				return deletePest;
			}
			return null;
		}catch(error){
			throw error;
		}
	}


	static async searchPest(name){
		try{
				const thePest=await database.pests.findOne({
					where:{name: name}
				});
				return thePest;
		}catch(error){
			throw error;
		}
	}

	static async pestGist(){
		try{
			return await database.pests.findAll({
				attributes: ['id','name','scientificname','casualorganism','host']
			});
		}catch(error){
			throw error;
		}
	}
}

export default pestService;
