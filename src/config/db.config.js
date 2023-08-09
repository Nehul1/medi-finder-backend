"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const hospitalInfo_model_1 = require("../models/hospitalInfo.model");
const hospital_model_1 = require("../models/hospital.model");
const users_model_1 = require("../models/users.model");
const hospitalAddress_model_1 = require("../models/hospitalAddress.model.");
const hospitalComparison_model_1 = require("../models/hospitalComparison.model");
const connect = () => {
    const hostName = "localhost";
    const userName = "postgres";
    const password = "nehul";
    const database = "medi_finder";
    const dialect = "postgres";
    // console.log('dialect', dialect)
    const operatorsAliases = 0;
    const sequelize = new sequelize_typescript_1.Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    sequelize.addModels([hospitalInfo_model_1.HospitalInformation]);
    sequelize.addModels([hospital_model_1.Hospital]);
    sequelize.addModels([hospitalAddress_model_1.HospitalAddress]);
    sequelize.addModels([hospitalComparison_model_1.HospitalComparisonFactor]);
    sequelize.addModels([users_model_1.Users]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = sequelize;
    return db;
};
exports.connect = connect;
