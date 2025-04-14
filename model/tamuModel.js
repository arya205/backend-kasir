import { Sequelize } from "sequelize";
import db from "../config/konek.js";

const { DataTypes } = Sequelize;

const Tamu = db.define("tb_tamu", {
    id_tamu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    instansi: {
        type: DataTypes.STRING,
    },
    tujuan: {
        type: DataTypes.STRING,
    },
    tanggal: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
}, {
    tableName: "tb_tamu",
    timestamps: false,
});

export default Tamu;