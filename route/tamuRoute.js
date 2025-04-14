import {
    getTamu,
    getTamuById,
    createTamu,
    updateTamu,
    deleteTamu,
} from '../controller/tamuController.js'
import express from 'express'

const route = express.Router()

route.get('/tamu', getTamu)
route.get('/tamu/:id', getTamuById)
route.post('/tamu', createTamu)
route.patch('/tamu/:id', updateTamu)
route.delete('/tamu/:id', deleteTamu)

export default route