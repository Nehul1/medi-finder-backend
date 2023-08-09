import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript'
import { Hospital } from './hospital.model'


@Table({
    timestamps: false,
    tableName: "hospital_comparison_factors",
 })
export class HospitalComparisonFactor extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
    })
    id!: number

    @ForeignKey(() => Hospital)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        // references: {
        //     model: Hospital,
        //     key: "provider_id"
        // }
    })
    provider_id!: number

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    mortality!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    safety_of_care!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    readmission!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    patient_experience!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    effectiveness_of_care!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    timeliness_of_care!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    efficient_use_of_medical_imaging!: string

}