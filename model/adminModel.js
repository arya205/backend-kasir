import { Sequelize } from "sequelize";
import db from "../config/konek.js";

const { DataTypes } = Sequelize

const Admin = db.define('tb_admin',{
    email: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    nama: {
        type: DataTypes.STRING,
    },
},{
    tableName: 'tb_admin',
    timestamps: false
})

export default Admin;