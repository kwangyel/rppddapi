import database from '../src/models';

class picservice{
	
	static async getPicById(pestid){
		try{
			const theimg=await database.images.findAll({
				where:{pestid: Number(pestid)}
			});
			return theimg;
		}catch(error){
			throw error;
		}
	}
}

export default picservice;
