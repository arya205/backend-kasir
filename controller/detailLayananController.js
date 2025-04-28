import DetailLayanan from "../model/detailLayananModel.js";
import multer from "multer";

const storage = multer.memoryStorage();
export const uploadImage = multer({ storage }).single("file");

export const getDetailLayanan = async (req, res) => {
    try {
        const response = await DetailLayanan.findAll({
            where : {id_layanan: req.params.id }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

export const getFilePDF = async (req, res) => {
  try {
    const detail = await DetailLayanan.findOne({
        where: { id_detail: req.params.id }
    });
    if (!detail) return res.status(404).send("Not found");

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=document.pdf');
    res.send(detail.file); 
  } catch (err) {
    res.status(500).send("Error loading file");
  }
};
  

export const getDetailLayananById = async (req, res) => {
    try {
        const detail = await DetailLayanan.findOne({
            where: { id_detail: req.params.id }
        });

        if (!detail) {
            return res.status(404).json({ msg: "Detail tidak ditemukan" });
        }

        const responseData = {
            ...detail.dataValues,
            file: detail.file
                ? `data:application/pdf;base64,${detail.file.toString("base64")}`
                : null,
        };

        res.status(200).json(responseData);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const createDetailLayanan = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ msg: "File PDF wajib diunggah" });
        }

        const { id_layanan, judul, deskripsi } = req.body;

        await DetailLayanan.create({
            id_layanan: id_layanan,
            judul: judul,
            deskripsi: deskripsi,
            file: req.file.buffer,  
        });

        res.status(201).json({ msg: "Detail layanan berhasil dibuat" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const updateDetailLayanan = async (req, res) => {
    try {
        const detail = await DetailLayanan.findByPk(req.params.id);
        if (!detail) {
            return res.status(404).json({ msg: "Detail tidak ditemukan" });
        }

        const { judul, deskripsi } = req.body;
        const fileBaru = req.file ? req.file.buffer : detail.file;

        await DetailLayanan.update(
            {
                judul: judul,
                deskripsi: deskripsi,
                file: fileBaru,
            },
            {
                where: { id_detail: req.params.id },
            }
        );

        res.status(200).json({ msg: "Detail layanan diperbarui" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const deleteDetailLayanan = async (req, res) => {
    try {
        const detail = await DetailLayanan.findByPk(req.params.id);
        if (!detail) {
            return res.status(404).json({ msg: "Detail tidak ditemukan" });
        }

        await DetailLayanan.destroy({
            where: { id_detail: req.params.id },
        });

        res.status(200).json({ msg: "Detail dihapus" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};
