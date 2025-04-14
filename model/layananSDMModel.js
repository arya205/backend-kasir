import { Sequelize } from "sequelize";
import db from "../config/konek.js";

const { DataTypes } = Sequelize

const LayananSDM = db.define('tb_layanan_sdm',{
    id_layanan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    judul: {
        type: DataTypes.STRING,
    },
},{
    tableName: 'tb_layanan_sdm',
    timestamps: false
})

export default LayananSDM;