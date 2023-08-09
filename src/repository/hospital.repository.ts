/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "../config/db.config";
import { HospitalInformation } from "../models/hospitalInfo.model";
import { Hospital } from "../models/hospital.model";
import { HospitalAddress } from "../models/hospitalAddress.model.";
import { HospitalComparisonFactor } from "../models/hospitalComparison.model";

export class HospitalRepository {

    private db: any = {};
    private hospitalRespository: any;
    private hospitalInformationRepository: any;
    private hospitalAddressRepository: any;
    private hospitalComparisonRepository: any;

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
        this.hospitalRespository = this.db.sequelize.getRepository(Hospital);
        this.hospitalInformationRepository = this.db.sequelize.getRepository(HospitalInformation);
        this.hospitalComparisonRepository = this.db.sequelize.getRepository(HospitalComparisonFactor);
        this.hospitalAddressRepository = this.db.sequelize.getRepository(HospitalAddress);
    }

    async getHospitals() {
        try {
            const hospitals = await this.hospitalRespository.findAll();
            // console.log('hospitals:::', hospitals);
            return hospitals;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getHospitalsInfo() {
        try {
            const hospitalsInfo = await this.hospitalInformationRepository.findAll();
            // console.log('hospitals names:::', hospitals_main);
            return hospitalsInfo;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getHospitalAddress() {
        try {
            const hospitalAddress = await this.hospitalAddressRepository.findAll();
            return hospitalAddress;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getHospitalComparison() {
        try {
            const hospitalFactors = await this.hospitalComparisonRepository.findAll();
            return hospitalFactors;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createHospital(hospital: any) {   
        try {
            const res = await this.hospitalRespository.create({
                provider_id:hospital.provider_id,name:hospital.name,type:hospital.type,phone_number:hospital.phone_number
           });

            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createHospitalAddress(hospitalAddress: any) {   
        try {
            const res = await this.hospitalAddressRepository.create({
                provider_id:hospitalAddress.provider_id,address:hospitalAddress.address,city:hospitalAddress.city,
                state:hospitalAddress.state, county_name: hospitalAddress.county_name, zip_code: hospitalAddress.zip_code
           });

           console.log(res);
           return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createHospitalInfo(hospitalInfo: any) {   
        try {
            const res = await this.hospitalInformationRepository.create({
                provider_id:hospitalInfo.provider_id,ownership:hospitalInfo.ownership,overall_rating:hospitalInfo.overall_rating
           });

           console.log(res);
           return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createHospitalComparison(hospitalComparison: any) {   
        try {
            const res = await this.hospitalComparisonRepository.create({
                provider_id:hospitalComparison.provider_id,mortality:hospitalComparison.mortality,
                safety_of_care:hospitalComparison.safety_of_care,readmission:hospitalComparison.readmission,
                patient_experience: hospitalComparison.patient_experience, effectiveness_of_care: hospitalComparison.effectiveness_of_care,
                timeliness_of_care: hospitalComparison.timeliness_of_care, efficient_use_of_medical_imaging: hospitalComparison.efficient_use_of_medical_imaging
           });

           console.log(res);
           return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async updateHospital(hospital: any) {   
        try {
            const res = await this.hospitalRespository.update(
                {
                    name:hospital.name,type:hospital.type,phone_number:hospital.phone_number
                },
                { where: { provider_id:hospital.provider_id } }
           );

            return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async updateHospitalAddress(hospitalAddress: any) {   
        try {
            const res = await this.hospitalAddressRepository.update({
                address:hospitalAddress.address,city:hospitalAddress.city,
                state:hospitalAddress.state, county_name: hospitalAddress.county_name, zip_code: hospitalAddress.zip_code
                },
                { where: { provider_id:hospitalAddress.provider_id } }
           );

           return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async updateHospitalInfo(hospitalInfo: any) {   
        try {
            const res = await this.hospitalInformationRepository.update({
                ownership:hospitalInfo.ownership,overall_rating:hospitalInfo.overall_rating
                },
                { where: { provider_id:hospitalInfo.provider_id } }
            );

           return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async updateHospitalComparison(hospitalComparison: any) {   
        try {
            const res = await this.hospitalComparisonRepository.update({
                mortality:hospitalComparison.mortality,
                safety_of_care:hospitalComparison.safety_of_care,readmission:hospitalComparison.readmission,
                patient_experience: hospitalComparison.patient_experience, effectiveness_of_care: hospitalComparison.effectiveness_of_care,
                timeliness_of_care: hospitalComparison.timeliness_of_care, efficient_use_of_medical_imaging: hospitalComparison.efficient_use_of_medical_imaging
                },
                { where: { provider_id:hospitalComparison.provider_id } }
           );

           return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async deleteHospital(providerID: any) {
        try {
            const res = await this.hospitalRespository.destroy(
                { where: { provider_id:providerID } }
           );

            return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async deleteHospitalAddress(providerID: any) {   
        try {
            const res = await this.hospitalAddressRepository.destroy(
                { where: { provider_id:providerID } }
           );

           return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async deleteHospitalInfo(providerID: any) {   
        try {
            const res = await this.hospitalInformationRepository.destroy(
                { where: { provider_id:providerID } }
            );

           return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async deleteHospitalComparison(providerID: any) {   
        try {
            const res = await this.hospitalComparisonRepository.destroy(
                { where: { provider_id:providerID } }
           );

           return res;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}