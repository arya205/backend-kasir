import Admin from "../model/adminModel.js";

export const getAdmin = async (req, res) => {
    try {
        const response = await Admin.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

export const getAdminById = async (req, res) => {
    try {
        const response = await Admin.findOne({
            where: { id_admin: req.params.id }
        });

        if (!response) {
            return res.status(404).json({ msg: "Admin tidak ditemukan" });
        }

        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

export const createAdmin = async (req, res) => {
    try {
        await Admin.create(req.body)
        res.status(201).json({ msg: "Admin Dibuat" })
    } catch (error) {
        console.log(error);
    }
}

export const updateAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) {
            return res.status(404).json({ msg: "Admin tidak ditemukan" });
        }

        await Admin.update( req.body, { 
            where: { id_admin: req.params.id } 
        });

        res.status(200).json({ msg: "Admin diperbarui" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) {
            return res.status(404).json({ msg: "Admin tidak ditemukan" });
        }
 
        await Admin.destroy({
            where: { id_admin: req.params.id },
        });

        res.status(200).json({ msg: "Admin dihapus" }); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({
            where: { email }
        });

        if (!admin) {
            return res.status(404).json({ message: "Email Salah!" }); 
        }

        if (password !== admin.password) {
            return res.status(401).json({ message: "Password salah" }); 
        }

        res.status(200).json({
            msg: "Login berhasil",
            admin: {
                id: admin.id_admin,
                nama: admin.nama
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message }); 
    }
};
