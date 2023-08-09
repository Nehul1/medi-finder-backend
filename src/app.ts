import * as bodyParser from "body-parser";
import { HospitalController } from "./controller/hospital.controller";
import 'dotenv/config'
// import { Hospitals } from "./models/task.model";
import express, { Request, Response } from "express";
import { UserController } from "./controller/users.controller";

const cors = require('cors')

class App {

    public express: express.Application;
    public hospitalController: HospitalController;
    public userController: UserController;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.hospitalController = new HospitalController();
        this.userController = new UserController();
    }

       // Configure Express middleware.
       private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        const corsOptions ={
            origin:'*', 
            credentials:true,            //access-control-allow-credentials:true
            methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
        }
        this.express.use(cors(corsOptions))
    }
    

    private routes(): void {

        this.express.post('/signup', async (req: Request, res: Response) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const firstName=req.body.users.firstName;
            const lastName=req.body.users.lastName;
            const email=req.body.users.email;
            const dateOfBirth=req.body.users.dateOfBirth;
            const password = req.body.users.password;
            const contactNumber = req.body.users.contactNumber;
            this.userController.signup(firstName, lastName, dateOfBirth, contactNumber, false, email, password).then((data: unknown) => res.json(data));
        });

        this.express.post('/login', async (req: Request, res: Response) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const email=req.body.users.email;
            const password = req.body.users.password;
            this.userController.login(email, password).then((data: unknown) => res.json(data));
        });

        this.express.get('/hospitals', async (req: Request, res: Response) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            this.hospitalController.getHospitals().then((data: unknown) => res.json(data));
        });

        this.express.get('/hospitals-information', async (req: Request, res: Response) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            this.hospitalController.getHospitalsInfo().then((data: unknown) => res.json(data));
        });
        
        this.express.get('/hospital-details', async (req: Request, res: Response) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            this.hospitalController.getHospitalDetails().then((data: unknown) => res.json(data));
        });
        
        // TODO: Admin Auth for the below three APIs
        // TODO: Handle foreign key constraints and avoid duplicate records
        this.express.post('/hospital', async (req: Request, res: Response) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const hospital=req.body.hospital;
            const hospitalInfo = req.body.hospitalInfo;
            const hospitalAddress = req.body.hospitalAddress;
            const hospitalComparison = req.body.hospitalComparison;
            this.hospitalController.createHospital(hospital,hospitalInfo,hospitalAddress,hospitalComparison).then((data: unknown) => res.json(data));
        });
        
        this.express.put('/hospital/:id', async (req: Request, res: Response) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const providerID=req.params.id;
            const hospital=req.body.hospital;
            const hospitalInfo = req.body.hospitalInfo;
            const hospitalAddress = req.body.hospitalAddress;
            const hospitalComparison = req.body.hospitalComparison;
            this.hospitalController.updateHospital(hospital,hospitalInfo,hospitalAddress,hospitalComparison).then((data: unknown) => res.json(data));
        });

        this.express.delete('/hospital/:id', async (req: Request, res: Response) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
            const providerID=req.params.id;
            this.hospitalController.deleteHospital(providerID).then((data: unknown) => res.json(data));
        });

        this.express.get("/", (req, res) => {
          res.send("Welcome to Medi Finder");
        });

    }

}

export default new App().express;
