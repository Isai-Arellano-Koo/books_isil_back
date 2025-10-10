import express from 'express';
import router from './routes/index'

import cors from 'cors';

const app = express();

// 🛡️ Permitir CORS (necesario si consumes desde otro dominio, como tu app móvil)
app.use(cors());

// 🔁 Middleware para leer JSON
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(router);


export default app;
