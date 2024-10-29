import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('MongoDB connected Successfully')
  } catch (error) {
    console.log(error.mongoose)
  }
}

export default connectDB
