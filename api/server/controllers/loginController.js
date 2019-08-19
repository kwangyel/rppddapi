import loginService from '../services/loginService';
import Util from '../utils/Utils';
import bcrypt from 'bcrypt';

const util=new Util();

class loginController{
	static async login(req,res){
		try{
			const username=req.body.username;
			const password=req.body.password;
			const token=await loginService.getToken(username,password);

			if(token)
			{
				util.setAuth(200,"Authorized",true,token,username);
			}else{
				util.setAuth(401,"Unauthorized")
			}
			// if(req.body.username=="admin"){
			// 	if(req.body.password=="admin"){
			// 		util.setSuccess(200,'authenticated');
			// 	}else{
			// 		util.setSuccess(200,'not authenticated password incorrect');
			// 	}
			// 	return util.send(res);
			// }else{
			// 	util.setSuccess(200,'user not found');
			// }
			return util.sendAuth(res);
		}catch(error){
			util.setAuth(400,error);
			console.log(error);
			return util.sendAuth(res);
		}
	}

	static async getHash(req,res){
		try{
			
			const resp= bcrypt.hashSync('bafra@2019',10);
			util.setSuccess(200,resp);
			return util.send(res);
		}catch(error){
			util.setError(400,error);
			return util.send(res);
		}
	}
}

export default loginController;
