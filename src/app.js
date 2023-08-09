"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const hospital_controller_1 = require("./controller/hospital.controller");
require("dotenv/config");
// import { Hospitals } from "./models/task.model";
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./controller/users.controller");
const cors = require('cors');
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middleware();
        this.routes();
        this.hospitalController = new hospital_controller_1.HospitalController();
        this.userController = new users_controller_1.UserController();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        const corsOptions = {
            origin: '*',
            credentials: true,
            methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
        };
        this.express.use(cors(corsOptions));
    }
    routes() {
        this.express.post('/signup', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const firstName = req.body.users.firstName;
            const lastName = req.body.users.lastName;
            const email = req.body.users.email;
            const dateOfBirth = req.body.users.dateOfBirth;
            const password = req.body.users.password;
            const contactNumber = req.body.users.contactNumber;
            this.userController.signup(firstName, lastName, dateOfBirth, contactNumber, false, email, password).then((data) => res.json(data));
        }));
        this.express.post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const email = req.body.users.email;
            const password = req.body.users.password;
            this.userController.login(email, password).then((data) => res.json(data));
        }));
        this.express.get('/hospitals', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            this.hospitalController.getHospitals().then((data) => res.json(data));
        }));
        this.express.get('/hospitals-information', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            this.hospitalController.getHospitalsInfo().then((data) => res.json(data));
        }));
        this.express.get('/hospital-details', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            this.hospitalController.getHospitalDetails().then((data) => res.json(data));
        }));
        // TODO: Admin Auth for the below three APIs
        // TODO: Handle foreign key constraints and avoid duplicate records
        this.express.post('/hospital', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const hospital = req.body.hospital;
            const hospitalInfo = req.body.hospitalInfo;
            const hospitalAddress = req.body.hospitalAddress;
            const hospitalComparison = req.body.hospitalComparison;
            this.hospitalController.createHospital(hospital, hospitalInfo, hospitalAddress, hospitalComparison).then((data) => res.json(data));
        }));
        this.express.put('/hospital/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const providerID = req.params.id;
            const hospital = req.body.hospital;
            const hospitalInfo = req.body.hospitalInfo;
            const hospitalAddress = req.body.hospitalAddress;
            const hospitalComparison = req.body.hospitalComparison;
            this.hospitalController.updateHospital(hospital, hospitalInfo, hospitalAddress, hospitalComparison).then((data) => res.json(data));
        }));
        this.express.delete('/hospital/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const providerID = req.params.id;
            this.hospitalController.deleteHospital(providerID).then((data) => res.json(data));
        }));
        this.express.get("/", (req, res) => {
            res.send("Welcome to Medi Finder");
        });
    }
}
exports.default = new App().express;
