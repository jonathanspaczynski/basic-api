import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Database connected");
  } catch (e) {
    console.log("error", e);
    process.exit(1);
  }
}

export default connect;
