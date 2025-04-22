import Tamu from "../model/tamuModel.js";

export const getTamu = async (req, res) => {
    try {
        const response = await Tamu.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const getTamuById = async (req, res) => {
    try {
        const response = await Tamu.findOne({
            where: { id_tamu: req.params.id }
        });

        if (!response) {
            return res.status(404).json({ msg: "Tamu tidak ditemukan" });
        }

        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

export const createTamu = async (req, res) => {
    try {
        await Tamu.create( req.body );
        res.status(201).json({ msg: "Tamu Dibuat" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const updateTamu = async (req, res) => {
    try {
        const tamu = await Tamu.findByPk(req.params.id);
        if (!tamu) {
            return res.status(404).json({ msg: "Tamu tidak ditemukan" });
        }

        await Tamu.update( req.body, { 
            where: { id_tamu: req.params.id } 
        });

        res.status(200).json({ msg: "Tamu diperbarui" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const deleteTamu = async (req, res) => {
    try {
        const tamu = await Tamu.findByPk(req.params.id);
        if (!tamu) {
            return res.status(404).json({ msg: "Tamu tidak ditemukan" });
        }
 
        await Tamu.destroy({
            where: { id_tamu: req.params.id },
        });

        res.status(200).json({ msg: "Tamu dihapus" }); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};