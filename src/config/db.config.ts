/* eslint-disable @typescript-eslint/no-explicit-any */

import { Sequelize } from 'sequelize-typescript'
import { HospitalInformation } from '../models/hospitalInfo.model';
import { Hospital } from '../models/hospital.model';
import { Users } from '../models/users.model';
import { HospitalAddress } from '../models/hospitalAddress.model.';
import { HospitalComparisonFactor } from '../models/hospitalComparison.model';

export const connect = () => {

    const hostName = "localhost";
    const userName = "postgres";
    const password = "nehul";
    const database = "medi_finder";
    const dialect: any = "postgres";

    // console.log('dialect', dialect)

    const operatorsAliases: any = 0;

    const sequelize = new Sequelize(database, userName, password, {
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
  
    sequelize.addModels([HospitalInformation]);
    sequelize.addModels([Hospital]);
    sequelize.addModels([HospitalAddress]);
    sequelize.addModels([HospitalComparisonFactor]);
    sequelize.addModels([Users]);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

}
