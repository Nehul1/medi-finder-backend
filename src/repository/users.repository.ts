/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "../config/db.config";
import { Users } from "../models/users.model";

export class UserRepository {

    private db: any = {};
    private userRespository: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.authenticate()
            .then(() => {
    console.log('Connection has been established successfully.');
        }).catch((err: any) => {
    console.error('Unable to connect to the database:', err);
});
        this.db.sequelize.sync({force:false, alter : true}).then(() => {
            console.log("Drop and re-sync db. :(");
        });
        this.userRespository = this.db.sequelize.getRepository(Users);
    }

    async getUser(email: string) {   
        try {
            const user = await this.userRespository.findOne(
                {
                where: {
                  email: email,
                },}
                );
            return user;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createUser(firstName: string, lastName: string, dateOfBirth: any, contactNumber: any, isAdmin: boolean ,email: string,password: string) {   
        try {
            const res = await this.userRespository.create({
                first_name:firstName,last_name:lastName,is_admin:isAdmin,email:email,password:password,phone_number:contactNumber,date_of_birth:dateOfBirth
           });

            return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}