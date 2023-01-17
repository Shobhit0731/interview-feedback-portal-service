import mongoose from "mongoose";
import { UserAuth } from "../Model/userAuthentication/IUserAuthModel.js";
import { mockUser } from "../Model/userAuthentication/UserAuthModel.js";

const connectDataBase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("url", process.env.MONGO_URI);
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => console.log("Unable to connect Database", err));
  mockUser.map(async (i, index) => {
    await UserAuth.insertMany(i);
  });
};

export default connectDataBase;
