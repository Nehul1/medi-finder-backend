import { UserRepository } from '../repository/users.repository';

export class UserService {

    private userRepo: UserRepository;

    constructor() {
        this.userRepo = new UserRepository();
    }

    async login(email: string,password: string) {
        const createHttpError = require("http-errors");

        const user= await this.userRepo.getUser(email);
        if (user.password===password){
            return "User logged in successfully and " + user.is_admin;
        }else{
            // const error = new createHttpError.Unauthorized("Invalid Credentials. Please try again");
            return "Invalid username or password. Please check"
        }
    }

    async signup(firstName: string, lastName: string, dateOfBirth: any, contactNumber: any, isAdmin: boolean ,email: string,password: string) {
        return await this.userRepo.createUser(firstName,lastName,dateOfBirth,contactNumber,isAdmin,email,password);
    }
}