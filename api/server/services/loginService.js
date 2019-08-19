import database from '../src/models';
import jwt from 'jsonwebtoken';
import config from '../config'
import bcrypt from 'bcrypt';

class loginService{
	static async getToken(username,password){
		try{
			// user=database.user.findOne();
			var token=''
			return await database.user.findOne({where:{username:username}}).then(user=>{
				if(!user) {
					console.log('user not found');
					return;
				}else if(bcrypt.compareSync(password,user.password)){
					token=jwt.sign({id:user.id},config.secret,{expiresIn:60*60});
					return token;
				}else{
					console.log('password not found');
					return;
				}
			});
		}catch(error){
			throw error;
		}
	}
	
}

export default loginService;
