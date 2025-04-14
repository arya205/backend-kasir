import {
    getAdmin,
    login
} from '../controller/adminController.js'
import express from 'express'

const route = express.Router()

route.get('/admin', getAdmin)
route.post('/login', login)

export default route