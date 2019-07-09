import picservice from '../services/picservice';
import Util from '../utils/Utils';

const util=new Util();

class piccontroller{
	
    static async getPicById(req,res){
		const {pestid}=req.params;

		if(!Number(pestid)){
			util.setError(404,'Please input valid pestid');
			return util.send(res);
		}

		try{
			const theImage=await picservice.getPicById(pestid);

			if(!theImage){
				util.setError(404,`cannot find image with id ${pestid}`);
			}else{
				util.setSuccess(200,'Found the Pest',theImage);
			}
			return util.send(res);
		}catch(error){
			util.setError(404,error);
			return util.send(res);
		}
	}

	
}

export default piccontroller;
