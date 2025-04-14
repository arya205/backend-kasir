import LayananSDM from "../model/layananSDMModel.js";

export const getLayananSDM = async (req, res) => {
    try {
        const response = await LayananSDM.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const getLayananSDMById = async (req, res) => {
    try {
        const response = await LayananSDM.findOne({
            where: { id_layanan: req.params.id }
        });

        if (!response) {
            return res.status(404).json({ msg: "Layanan tidak ditemukan" });
        }

        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const createLayananSDM = async (req, res) => {
    try {

        await LayananSDM.create( req.body );

        res.status(201).json({ msg: "Layanan Dibuat" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const updateLayananSDM = async (req, res) => {
    try {
        const layanan = await LayananSDM.findByPk(req.params.id);
        if (!layanan) {
            return res.status(404).json({ msg: "Layanan tidak ditemukan" });
        }

        await LayananSDM.update( req.body, { 
            where: { id_layanan: req.params.id } 
        });

        res.status(200).json({ msg: "Layanan diperbarui" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const deleteLayananSDM = async (req, res) => {
    try {
        const layanan = await LayananSDM.findByPk(req.params.id);
        if (!layanan) {
            return res.status(404).json({ msg: "Layanan SDM tidak ditemukan" });
        }

        await LayananSDM.destroy({
            where: { id_layanan: req.params.id },
        });

        res.status(200).json({ msg: "Layanan SDM dihapus" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};