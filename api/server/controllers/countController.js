import counterService from '../services/counterService';

class counterController{
	static async incrementCounter(req,res){
		try{
			const viewCount=await counterService.incrementCounter();
			console.log(viewCount)
			return res.send(viewCount);
		}catch(error){
			return res.send(error);
		}
	}

	static async getCount(req,res){
		try{
			const theCount=await counterService.getCount();
			return res.send(theCount);
		}catch(error){
			return res.send(error);
		}
	}
}

export default counterController;
