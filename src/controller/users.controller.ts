import { UserService } from '../services/users.service';


export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async login(email: string, password: string) {
        return await this.userService.login(email, password);
    }

    async signup(firstName: string, lastName: string, dateOfBirth: any, contactNumber: any, isAdmin: boolean ,email: string,password: string) {
        return await this.userService.signup(firstName,lastName,dateOfBirth,contactNumber,isAdmin,email,password);
    }

}

