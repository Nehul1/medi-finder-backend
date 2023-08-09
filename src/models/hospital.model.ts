import { Table, Column, Model, DataType } from 'sequelize-typescript'


@Table({
    timestamps: false,
    tableName: "hospitals",
 })
export class Hospital extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey:true
    })
    provider_id!: number

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    name!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    type!: string

    @Column({
        type: DataType.BIGINT,
        allowNull: true,
    })
    phone_number!: number

  
}