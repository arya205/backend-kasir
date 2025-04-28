import { Sequelize } from "sequelize";
import db from "../config/konek.js";

const { DataTypes } = Sequelize;

const DetailLayanan = db.define('tb_detail_layanan', {
    id_detail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_layanan: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tb_layanan_sdm', 
            key: 'id_layanan',   
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE' 
    },
    judul: {
        type: DataTypes.STRING, 
    },
    deskripsi: {
        type: DataTypes.TEXT, 
    },
    file: {
        type: DataTypes.BLOB('long'), 
    },
},{
    tableName: 'tb_detail_layanan',
    timestamps: false
});

export default DetailLayanan;
