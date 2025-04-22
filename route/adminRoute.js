import {
    getAdmin,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    login
} from '../controller/adminController.js'
import express from 'express'

const route = express.Router()

route.get('/admin', getAdmin)
route.get('/admin/:id', getAdminById)
route.post('/admin', createAdmin)
route.patch('/admin/:id', updateAdmin)
route.delete('/admin/:id', deleteAdmin)
route.post('/login', login)

export default route