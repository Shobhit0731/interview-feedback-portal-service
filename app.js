import express from "express";
import userRoute from "./api/route/user.js";
import  bodyParser from 'body-parser';
import cors from 'cors'
////////////////////////////////////
// import {graphqlHttp} from 'express-graphql';
// import schema from './schema'



const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/grphql", graphqlHttp({
//     schema,
//     pretty: true,
//     graphiql: true,
// }))


app.use('/user', userRoute);
app.get('/healthcheck', async(req,res) => {
    res.send({
        status: 'ok',
        service: 'ETL',
    })
});



export default app;
