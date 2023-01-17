import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import User from '../modelSchema/user.js';
import bcrypt from './bcrypt';


router.get('/', (req, res, next) =>{
  bcrypt.hash(req.body.password, 10, (err, hash)=>{
      if(err)
      {
          return res.status(500).json({
              err: err
          })
      }
      else
      {
          const user = new User({
            _id: mongoose.Schema.Types.ObjectId,
            name: req.body.name,
            password: hash,
            email: req.body.email,
          })
          user.save()
          .then(result =>{
           res.status(200).json({
               new_user: result
           })
          })
          .catch(err=>{
              res.status(500).json({
                  error: err
              })
          })
      }
  })
})









module.exports = router;
