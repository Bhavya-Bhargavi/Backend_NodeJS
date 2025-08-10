
const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const vendorRoutes = require("./routes/vendorRoutes");
const bodyParser = require("body-parser");
const firmRoutes = require("./routes/firmRoutes")
const productRoutes = require("./routes/producRoutes")
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 4000;

dotEnv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

app.use(bodyParser.json());
app.use("/vendor", vendorRoutes);
app.use("/firm", firmRoutes)
app.use("/product",productRoutes)
console.log("attempting to connect")

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})

app.get("/", (req,res) => {
    res.send("welcome")
})