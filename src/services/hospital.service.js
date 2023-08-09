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
exports.HospitalService = void 0;
const hospital_repository_1 = require("../repository/hospital.repository");
class HospitalService {
    constructor() {
        this.hospitalRepo = new hospital_repository_1.HospitalRepository();
    }
    getHospitals() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.hospitalRepo.getHospitals();
        });
    }
    getHospitalsInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.hospitalRepo.getHospitalsInfo();
        });
    }
    getHospitalDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            let hospitals = yield this.hospitalRepo.getHospitals();
            let hospitalInfo = yield this.hospitalRepo.getHospitalsInfo();
            let hospitalAddress = yield this.hospitalRepo.getHospitalAddress();
            let hospitalComparison = yield this.hospitalRepo.getHospitalComparison();
            const hospitalDetails = {
                "hospitals": hospitals,
                "hospitalInfo": hospitalInfo,
                "hospitalAddress": hospitalAddress,
                "hospitalComparison": hospitalComparison,
            };
            return hospitalDetails;
        });
    }
    createHospital(hospital, hospitalInfo, hospitalAddress, hospitalComparison) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.hospitalRepo.createHospital(hospital);
            const res1 = yield this.hospitalRepo.createHospitalInfo(hospitalInfo);
            const res2 = yield this.hospitalRepo.createHospitalAddress(hospitalAddress);
            const res3 = yield this.hospitalRepo.createHospitalComparison(hospitalComparison);
            if (res.length === 0 || res1.length === 0 || res2.length === 0 || res3.length === 0) {
                return "Hospital creation failed";
            }
            return "Hospital creation successful";
        });
    }
    updateHospital(hospital, hospitalInfo, hospitalAddress, hospitalComparison) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.hospitalRepo.updateHospital(hospital);
            const res1 = yield this.hospitalRepo.updateHospitalInfo(hospitalInfo);
            const res2 = yield this.hospitalRepo.updateHospitalAddress(hospitalAddress);
            const res3 = yield this.hospitalRepo.updateHospitalComparison(hospitalComparison);
            if (res.length === 0 || res1.length === 0 || res2.length === 0 || res3.length === 0) {
                return "Hospital update failed";
            }
            return "Hospital update successful";
        });
    }
    deleteHospital(providerID) {
        return __awaiter(this, void 0, void 0, function* () {
            const res1 = yield this.hospitalRepo.deleteHospitalInfo(providerID);
            const res2 = yield this.hospitalRepo.deleteHospitalAddress(providerID);
            const res3 = yield this.hospitalRepo.deleteHospitalComparison(providerID);
            const res = yield this.hospitalRepo.deleteHospital(providerID);
            if (res.length === 0 || res1.length === 0 || res2.length === 0 || res3.length === 0) {
                return "Hospital deletion failed";
            }
            return "Hospital deletion successful";
        });
    }
}
exports.HospitalService = HospitalService;
