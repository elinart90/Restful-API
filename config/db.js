const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URI);
        console.log("Database connected")
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;  