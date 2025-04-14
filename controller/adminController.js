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
