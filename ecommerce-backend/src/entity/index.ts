import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import productRoutes from './routes/productRoutes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

createConnection().then(() => {
  app.use('/products', productRoutes);
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
});
