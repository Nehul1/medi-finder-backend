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
exports.UserService = void 0;
const users_repository_1 = require("../repository/users.repository");
class UserService {
    constructor() {
        this.userRepo = new users_repository_1.UserRepository();
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const createHttpError = require("http-errors");
            const user = yield this.userRepo.getUser(email);
            if (user.password === password) {
                return "User logged in successfully and " + user.is_admin;
            }
            else {
                // const error = new createHttpError.Unauthorized("Invalid Credentials. Please try again");
                return "Invalid username or password. Please check";
            }
        });
    }
    signup(firstName, lastName, dateOfBirth, contactNumber, isAdmin, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepo.createUser(firstName, lastName, dateOfBirth, contactNumber, isAdmin, email, password);
        });
    }
}
exports.UserService = UserService;
