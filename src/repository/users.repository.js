"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const db_config_1 = require("../config/db.config");
const users_model_1 = require("../models/users.model");
class UserRepository {
    constructor() {
        this.db = {};
        this.db = (0, db_config_1.connect)();
        // For Development
        this.db.sequelize.authenticate()
            .then(() => {
            console.log('Connection has been established successfully.');
        }).catch((err) => {
            console.error('Unable to connect to the database:', err);
        });
        this.db.sequelize.sync({ force: false, alter: true }).then(() => {
            console.log("Drop and re-sync db. :(");
        });
        this.userRespository = this.db.sequelize.getRepository(users_model_1.Users);
    }
    getUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRespository.findOne({
                    where: {
                        email: email,
                    },
                });
                return user;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    createUser(firstName, lastName, dateOfBirth, contactNumber, isAdmin, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.userRespository.create({
                    first_name: firstName, last_name: lastName, is_admin: isAdmin, email: email, password: password, phone_number: contactNumber, date_of_birth: dateOfBirth
                });
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
}
exports.UserRepository = UserRepository;
