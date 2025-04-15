import {
    getDetailLayanan,
    createDetailLayanan,
    deleteDetailLayanan,
    uploadImage,
    getDetailLayananById,
} from '../controller/detailLayananController.js'
import express from 'express'

const route = express.Router()

route.get('/detail-layanan/:id', getDetailLayanan)
route.get('/detail/:id', getDetailLayananById)
route.post('/detail', uploadImage, createDetailLayanan)
route.patch('/detail/:id', uploadImage, createDetailLayanan)
route.delete('/detail/:id', deleteDetailLayanan)

export default route