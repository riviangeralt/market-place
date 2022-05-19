import mongoose from "mongoose";

let connection = {};

const connectToMongoDB = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
};

export default connectToMongoDB;
