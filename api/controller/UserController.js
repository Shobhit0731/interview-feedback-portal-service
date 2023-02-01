import { UserModel, Interview } from "../modelSchema/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Users {
  loginuser = async (req, res, next) => {
    try {
      console.log(req.body.email, req.body.password);
      const fetchEmail = (req.body.email).toLowerCase()
      console.log(typeof(fetchEmail));
      UserModel.find({ email: fetchEmail })
        .exec()
        .then((user) => {
          console.log("user", user);
          if (user.length < 1) {
            return res.status(401).json({
              msg: "incorrect email id ",
            });
          } else {
            if (user.length > 0 && user[0]["password"] === req.body.password) {
              const token = jwt.sign(
                {
                  password: user[0].password,
                  email: user[0].email,
                },
                "this is dummy text",
                {
                  expiresIn: "24h",
                }
              );
              res.status(200).json({
                password: user[0].password,
                email: user[0].email,
                token: token,
              });
            } else if (user.length > 0 && req.body.password === undefined) {
              return res.status(401).json({
                msg: "please enter your password",
              });
            } else {
              return res.status(401).json({
                msg: "password matching fail",
              });
            }
          }
        });
    } catch (error) {
      console.log(error.msg);
      res.status(500).json({ message: error.msg });
    }
  };

  signupuser = async (req, res, next) => {
    const fetchEmail = (req.body.email).toLowerCase()
    const findemail = await UserModel.find({ email: fetchEmail });
    if (findemail.length > 0) {
      return res.status(400).json({
        message: "user already exist",
      });
    } else {
      const user = new UserModel({
        name: req.body.name,
        password: req.body.password,
        email: fetchEmail
      });
      user
        .save()
        .then((result) => {
          res.status(200).json({
            new_user: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    }
  };

  reset_password = async (req, res, next) => {
    try {
      const fetchEmail = (req.body.email).toLowerCase()
      const findemail = await UserModel.find({ email: fetchEmail });
      if (findemail.length == 0) {
        return res.status(400).json({
          message: "user does not exist",
        });
      } else {
        const newUserData = {
          password: req.body.password,
        };

        const user = await UserModel.updateOne(
          { email: fetchEmail },
          {
            $set: {
              password: req.body.password,
            },
          }
        );
        console.log(user);
        if (!user) {
          res.status(404).json({ success: false, message: "user not found" });
        }
        res.status(200).json({ success: true, user });
      }
    } catch (error) {
      console.log(error.msg);
      res.status(400).json({ success: false, message: error.msg });
    }
  };

  add_candidate = async (req, res, next) => {
    console.log(req.body.email);
    try {
      const checkUser = await Interview.find({
        emailId: req.body.email,
      });
      if (checkUser.length > 0) {
        res.status(400).json({
          message: "candidate details already exists",
        });
      } else {
        const data = await Interview.insertMany([
          {
            Name: req.body.name,
            emailId: req.body.email,
            position: req.body.position,
            experienceInYears: req.body.experience,
            alignedBy: req.body.alignedBy,
            status: req.body.status,
            interviewDate: req.body.interviewDate,
            department: req.body.department,
            feedback: req.body.feedback
          },
        ]);
        if (data.length > 0) {
          res.status(201).json({
            message: "candidate added successfully",
          });
        } else {
          res.status(401).json({
            status: "Failed",
          });
        }
      }
    } catch (err) {
      res.status(404).json({
        status: "Error",
        message: err,
      });
    }
  };


  fetch_candidates =  async (req, res, next) => {
    try{
      const getData = await Interview.find({})
      
      if(getData.length>0){
        res.status(201).json(getData)
      }
      else{
        res.status(400).json({
          msg: "no candidates details available"
        })
      }
    }
    catch (err){
      res.status(404).json({
        status: "Error",
        message: err,
      });
    }
  

  }
}

export default new Users();
