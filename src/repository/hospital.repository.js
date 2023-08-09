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
exports.HospitalRepository = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const db_config_1 = require("../config/db.config");
const hospitalInfo_model_1 = require("../models/hospitalInfo.model");
const hospital_model_1 = require("../models/hospital.model");
const hospitalAddress_model_1 = require("../models/hospitalAddress.model.");
const hospitalComparison_model_1 = require("../models/hospitalComparison.model");
class HospitalRepository {
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
        this.hospitalRespository = this.db.sequelize.getRepository(hospital_model_1.Hospital);
        this.hospitalInformationRepository = this.db.sequelize.getRepository(hospitalInfo_model_1.HospitalInformation);
        this.hospitalComparisonRepository = this.db.sequelize.getRepository(hospitalComparison_model_1.HospitalComparisonFactor);
        this.hospitalAddressRepository = this.db.sequelize.getRepository(hospitalAddress_model_1.HospitalAddress);
    }
    getHospitals() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hospitals = yield this.hospitalRespository.findAll();
                // console.log('hospitals:::', hospitals);
                return hospitals;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    getHospitalsInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hospitalsInfo = yield this.hospitalInformationRepository.findAll();
                // console.log('hospitals names:::', hospitals_main);
                return hospitalsInfo;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    getHospitalAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hospitalAddress = yield this.hospitalAddressRepository.findAll();
                return hospitalAddress;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    getHospitalComparison() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hospitalFactors = yield this.hospitalComparisonRepository.findAll();
                return hospitalFactors;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    createHospital(hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalRespository.create({
                    provider_id: hospital.provider_id, name: hospital.name, type: hospital.type, phone_number: hospital.phone_number
                });
                console.log(res);
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    createHospitalAddress(hospitalAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalAddressRepository.create({
                    provider_id: hospitalAddress.provider_id, address: hospitalAddress.address, city: hospitalAddress.city,
                    state: hospitalAddress.state, county_name: hospitalAddress.county_name, zip_code: hospitalAddress.zip_code
                });
                console.log(res);
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    createHospitalInfo(hospitalInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalInformationRepository.create({
                    provider_id: hospitalInfo.provider_id, ownership: hospitalInfo.ownership, overall_rating: hospitalInfo.overall_rating
                });
                console.log(res);
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    createHospitalComparison(hospitalComparison) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalComparisonRepository.create({
                    provider_id: hospitalComparison.provider_id, mortality: hospitalComparison.mortality,
                    safety_of_care: hospitalComparison.safety_of_care, readmission: hospitalComparison.readmission,
                    patient_experience: hospitalComparison.patient_experience, effectiveness_of_care: hospitalComparison.effectiveness_of_care,
                    timeliness_of_care: hospitalComparison.timeliness_of_care, efficient_use_of_medical_imaging: hospitalComparison.efficient_use_of_medical_imaging
                });
                console.log(res);
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    updateHospital(hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalRespository.update({
                    name: hospital.name, type: hospital.type, phone_number: hospital.phone_number
                }, { where: { provider_id: hospital.provider_id } });
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    updateHospitalAddress(hospitalAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalAddressRepository.update({
                    address: hospitalAddress.address, city: hospitalAddress.city,
                    state: hospitalAddress.state, county_name: hospitalAddress.county_name, zip_code: hospitalAddress.zip_code
                }, { where: { provider_id: hospitalAddress.provider_id } });
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    updateHospitalInfo(hospitalInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalInformationRepository.update({
                    ownership: hospitalInfo.ownership, overall_rating: hospitalInfo.overall_rating
                }, { where: { provider_id: hospitalInfo.provider_id } });
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    updateHospitalComparison(hospitalComparison) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalComparisonRepository.update({
                    mortality: hospitalComparison.mortality,
                    safety_of_care: hospitalComparison.safety_of_care, readmission: hospitalComparison.readmission,
                    patient_experience: hospitalComparison.patient_experience, effectiveness_of_care: hospitalComparison.effectiveness_of_care,
                    timeliness_of_care: hospitalComparison.timeliness_of_care, efficient_use_of_medical_imaging: hospitalComparison.efficient_use_of_medical_imaging
                }, { where: { provider_id: hospitalComparison.provider_id } });
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    deleteHospital(providerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalRespository.destroy({ where: { provider_id: providerID } });
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    deleteHospitalAddress(providerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalAddressRepository.destroy({ where: { provider_id: providerID } });
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    deleteHospitalInfo(providerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalInformationRepository.destroy({ where: { provider_id: providerID } });
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    deleteHospitalComparison(providerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.hospitalComparisonRepository.destroy({ where: { provider_id: providerID } });
                return res;
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
}
exports.HospitalRepository = HospitalRepository;
