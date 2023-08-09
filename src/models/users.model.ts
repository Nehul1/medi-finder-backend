import { Table, Column, Model, DataType } from 'sequelize-typescript'


@Table({
    timestamps: false,
    tableName: "users",
 })
export class Users extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    })
    id!: number

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    first_name!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    last_name!: string

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
    })
    is_admin!: boolean

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    email!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    password!: string

    @Column({
        type: DataType.BIGINT,
        allowNull: true,
    })
    phone_number!: bigint

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    date_of_birth!: string
}