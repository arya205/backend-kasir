import {
    getLayananSDM,
    getLayananSDMById,
    createLayananSDM,
    updateLayananSDM,
    deleteLayananSDM
} from '../controller/layananSDMController.js'; 
import express from 'express';

const route = express.Router();

route.get('/layanan', getLayananSDM)
route.get('/layanan/:id', getLayananSDMById)
route.post('/layanan', createLayananSDM)
route.patch('/layanan/:id', updateLayananSDM)
route.delete('/layanan/:id', deleteLayananSDM)

export default route;
