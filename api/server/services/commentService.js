import database from '../src/models';

class pestService {

  static async addComments(newComment) {
    try {
      return await database.comments.create(newComment);
    } catch (error) {
      throw error;
    }

  }

  static async getCommentsId(id){
		try{
			const theComment=await database.comments.findAll({
				where:{pest_id: Number(id)}
			});
			return theComment;
		}catch(error){
			throw error;
		}
	}
}

export default pestService;
