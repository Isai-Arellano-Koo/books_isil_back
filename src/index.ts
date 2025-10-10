import app from './app';
import dotenv from 'dotenv';
import { conn } from './config/db';

dotenv.config();

const PORT = process.env.PORT || 3000;

conn.sync({alter: true}).then(() => {
  app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
})
