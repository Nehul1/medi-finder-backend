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
exports.HospitalController = void 0;
const hospital_service_1 = require("../services/hospital.service");
class HospitalController {
    constructor() {
        this.hospitalService = new hospital_service_1.HospitalService();
    }
    getHospitals() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.logger.info('Controller: getTasks', null)
            return yield this.hospitalService.getHospitals();
        });
    }
    getHospitalsInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.hospitalService.getHospitalsInfo();
        });
    }
    getHospitalDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.hospitalService.getHospitalDetails();
        });
    }
    createHospital(hospital, hospitalInfo, hospitalAddress, hospitalComparison) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.hospitalService.createHospital(hospital, hospitalInfo, hospitalAddress, hospitalComparison);
        });
    }
    updateHospital(hospital, hospitalInfo, hospitalAddress, hospitalComparison) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.hospitalService.updateHospital(hospital, hospitalInfo, hospitalAddress, hospitalComparison);
        });
    }
    deleteHospital(providerID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.hospitalService.deleteHospital(providerID);
        });
    }
}
exports.HospitalController = HospitalController;
