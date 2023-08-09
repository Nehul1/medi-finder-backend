import { or } from 'sequelize';
import { HospitalRepository } from '../repository/hospital.repository';

export class HospitalService {

    private hospitalRepo: HospitalRepository;

    constructor() {
        this.hospitalRepo = new HospitalRepository();
    }

    async getHospitals() {
        return await this.hospitalRepo.getHospitals();
    }
    async getHospitalsInfo() {
        return await this.hospitalRepo.getHospitalsInfo();
    }
    
    async getHospitalDetails() {
        let hospitals= await this.hospitalRepo.getHospitals();
        let hospitalInfo = await this.hospitalRepo.getHospitalsInfo();
        let hospitalAddress = await this.hospitalRepo.getHospitalAddress();
        let hospitalComparison = await this.hospitalRepo.getHospitalComparison();
        const hospitalDetails={
            "hospitals":hospitals,
            "hospitalInfo":hospitalInfo,
            "hospitalAddress":hospitalAddress,
            "hospitalComparison": hospitalComparison,
        }

        return hospitalDetails
    }
    
    async createHospital(hospital: any, hospitalInfo: any, hospitalAddress: any, hospitalComparison: any) {
        const res= await this.hospitalRepo.createHospital(hospital);
        const res1= await this.hospitalRepo.createHospitalInfo(hospitalInfo);
        const res2= await this.hospitalRepo.createHospitalAddress(hospitalAddress);
        const res3= await this.hospitalRepo.createHospitalComparison(hospitalComparison);
        
        if (res.length===0 || res1.length===0 || res2.length===0 || res3.length===0){
            return "Hospital creation failed"
        }
        
        return "Hospital creation successful"
    }

    async updateHospital(hospital: any, hospitalInfo: any, hospitalAddress: any, hospitalComparison: any) {
        const res= await this.hospitalRepo.updateHospital(hospital);
        const res1= await this.hospitalRepo.updateHospitalInfo(hospitalInfo);
        const res2= await this.hospitalRepo.updateHospitalAddress(hospitalAddress);
        const res3= await this.hospitalRepo.updateHospitalComparison(hospitalComparison);
        
        if (res.length===0 || res1.length===0 || res2.length===0 || res3.length===0){
            return "Hospital update failed"
        }
        
        return "Hospital update successful"
    }

    async deleteHospital(providerID: any) {
        const res1= await this.hospitalRepo.deleteHospitalInfo(providerID);
        const res2= await this.hospitalRepo.deleteHospitalAddress(providerID);
        const res3= await this.hospitalRepo.deleteHospitalComparison(providerID);
        const res= await this.hospitalRepo.deleteHospital(providerID);
        
        if (res.length===0 || res1.length===0 || res2.length===0 || res3.length===0){
            return "Hospital deletion failed"
        }
        
        return "Hospital deletion successful"
    }
}