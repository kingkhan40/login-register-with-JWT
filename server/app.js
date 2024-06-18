require("dotenv").config();
require('express-async-errors');
const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors')
const app = express();
const mainRouter = require("./routes/user");

app.use(express.json());

app.use(cors())
app.use("/api/v1", mainRouter);

try {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to MongoDB");
       
    })
} catch (error) {
    console.log(error.message);
    process.exit(1);
    
}

const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
