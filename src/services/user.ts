import { Service } from 'typedi';
@Service()
export default class UserService {
  constructor(
    private userModel,
  ){}

  getMyUser(userId){
    const user = this.userModel.findById(userId);
    return user;
  }
}