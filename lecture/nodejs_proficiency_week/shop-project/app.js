import express from 'express';
import { SERVER_PORT } from './constants/app.constant.js';
import postsRouter from './routes/posts.route.cjs';
import db from './models/index.cjs';
import { config } from 'dotenv';

const app = express();

app.use(express.json());
app.use('/api', [postsRouter]);

try {
  await db.sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(SERVER_PORT, () => {
  console.log(`Example app listening on port ${SERVER_PORT}`);
});
