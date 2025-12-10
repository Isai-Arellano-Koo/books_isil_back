import app from './app';
import dotenv from 'dotenv';
import { conn } from './config/db';

dotenv.config();

// AlwaysData proporciona las variables PORT e IP automáticamente.
const PORT = Number(process.env.PORT) || 8100;
const HOST = process.env.IP || '::'; // 👈 IPv6 requerido por AlwaysData

conn.sync({ alter: true }).then(() => {
  app.listen(PORT, HOST, () => {
    console.log(`🚀 Server running at http://[${HOST}]:${PORT}`);
  });
});
