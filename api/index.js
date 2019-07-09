//const express=require('express');
//const bodyparser=require('body-parser');

import express from 'express';
import bodyparser from 'body-parser';
import config from 'dotenv';
import pestRoutes from './server/routes/pestRoutes';
import commentsroute from './server/routes/commentRoute';
import pictureRoute from './server/routes/pictureRoute';
import cors from 'cors';
config.config();

const app=express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

const port = process.env.PORT || 8000;

app.use('/api/v1/pests',pestRoutes);
app.use('/api/v1/comments',commentsroute);
app.use('/api/v1/img',pictureRoute);

app.get('*',(req,res)=>{
	res.status(200).send({
		message:'welcome to the RPPD API.'
	})
});

app.listen(port,()=>{
	console.log(`server listening on port ${port}`)
});

//module.exports=app;

export default app;
