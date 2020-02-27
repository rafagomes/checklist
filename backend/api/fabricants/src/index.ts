import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.get( "/", ( req:Request, res:any ) => {
  res.send( "Hello world!" );
} );

mongoose
  .connect('mongodb://mongo:27017/expressmongo', {
    useNewUrlParser: true
  })
  .then(result => {
    // console.log('MongoDB Conectado');
  })
  .catch(error => {
    throw new Error(error);
  });

// app.listen(9001, () => console.log('Active server on 9001'));
app.listen(9001);