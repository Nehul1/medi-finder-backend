import { Table, Column, Model, DataType, ForeignKey, AutoIncrement } from 'sequelize-typescript'
import { Hospital } from './hospital.model'


@Table({
    timestamps: false,
    tableName: "hospital_information",
 })
export class HospitalInformation extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
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
    ownership!: string

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    overall_rating!: number

  
}