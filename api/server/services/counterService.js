import database from '../src/models';
import Sequelize from 'sequelize';

class counterService{

	static async incrementCounter(){
		try{
			const theCount=await database.counter.update(
				{viewcount: Sequelize.literal('viewcount + 1')},
				{where:{id: Number(1)}});
			return theCount;
		}catch(error){
			console.log(error);
			throw error;
		}
	}

	static async getCount(){
		try{
			const theCount=await database.counter.findOne(
				{
					where:{id: Number(1)},
					attributes : ['viewcount']
				},
				);
			return theCount;
		}catch(error){
			throw error;
		}
	}
}

export default counterService;
