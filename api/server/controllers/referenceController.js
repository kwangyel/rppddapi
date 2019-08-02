import referenceService from '../services/referenceService';
import Util from '../utils/Utils';

const util=new Util();

class referenceContoller{
    
    static async getReferenceId(req,res){
		const {pestid}=req.params;

		if(!Number(pestid)){
			util.setError(404,'Please input valid pestid');
			return util.send(res);
		}

		try{
			const theReference=await referenceService.getReferenceId(pestid);

			if(!theReference){
				util.setError(404,`cannot find reference with pest id ${pestid}`);
			}else{
				util.setSuccess(200,'Found the reference',theReference);
			}
			return util.send(res);
		}catch(error){
			
			util.setError(404,error);
			return util.send(res);
		}
	}

	
}

export default referenceContoller;
