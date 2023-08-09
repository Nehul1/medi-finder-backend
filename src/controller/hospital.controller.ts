import { HospitalService } from '../services/hospital.service';


export class HospitalController {
    private hospitalService: HospitalService;

    constructor() {
        this.hospitalService = new HospitalService();
    }

    async getHospitals() {
        // this.logger.info('Controller: getTasks', null)
        return await this.hospitalService.getHospitals();
    }

    async getHospitalsInfo(){
        return await this.hospitalService.getHospitalsInfo();

    }

    async getHospitalDetails(){
        return await this.hospitalService.getHospitalDetails();
    }

    async createHospital(hospital: any,hospitalInfo: any,hospitalAddress: any,hospitalComparison: any){
        return await this.hospitalService.createHospital(hospital,hospitalInfo,hospitalAddress,hospitalComparison);
    }

    async updateHospital(hospital: any,hospitalInfo: any,hospitalAddress: any,hospitalComparison: any){
        return await this.hospitalService.updateHospital(hospital,hospitalInfo,hospitalAddress,hospitalComparison);
    }

    async deleteHospital(providerID: any){
        return await this.hospitalService.deleteHospital(providerID);
    }

}

