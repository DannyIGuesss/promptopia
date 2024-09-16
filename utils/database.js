import mongoose from 'mongoose'

let isConntected = false; // track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if(isConntected) {
    console.log('MongoDB is connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConntected = true;

    console.log('MonogDB connected')
  } catch (error) {
    console.log(error)
  }
} 