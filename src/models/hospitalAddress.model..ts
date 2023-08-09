import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript'
import { Hospital } from './hospital.model'


@Table({
    timestamps: false,
    tableName: "hospital_address",
 })
export class HospitalAddress extends Model{
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
        type: DataType.TEXT,
        allowNull: true,
    })
    address!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    city!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    state!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    county_name!: string

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    zip_code!: number

}