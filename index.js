import express from "express"
import cors from "cors"
import adminRoute from "./route/adminRoute.js"
import layananRoute from "./route/layananSDMRoute.js"
import tamuRoute from "./route/tamuRoute.js"
import detailLayananRoute from "./route/detailLayananRoute.js"

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(adminRoute)
app.use(layananRoute)
app.use(tamuRoute)
app.use(detailLayananRoute)

app.listen(PORT, () => console.log(`Running on port ${PORT}`));