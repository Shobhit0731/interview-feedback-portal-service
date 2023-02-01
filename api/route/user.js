import express from "express";
import UserController from "../controller/UserController.js";
import userSchema from "../controller/UserController.js"
import { nameValidator, emailValidator, passwordValidator} from "../middleware/Validation.js";

const userRoute = express.Router();


userRoute.post("/login", emailValidator, UserController.loginuser);


userRoute.post("/signup", nameValidator, emailValidator, passwordValidator, UserController.signupuser);

userRoute.put("/reset-password", emailValidator, passwordValidator, UserController.reset_password);

userRoute.post("/add-candidate", UserController.add_candidate);

userRoute.get("/fetch-candidate", UserController.fetch_candidates);

export default userRoute;
