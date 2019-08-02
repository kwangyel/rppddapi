import database from '../src/models';

class referenceService{

	static async getReferenceId(pestid){
		try{
			const theReference=await database.reference.findAll({
				where:{pest_id: Number(pestid)},
				attributes:['reference']
			});
			return theReference;
		}catch(error){
			throw error;
		}
	}
}

export default referenceService;
