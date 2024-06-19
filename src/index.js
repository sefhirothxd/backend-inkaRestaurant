import app from './app.js';
// import { PORT } from './config.js';
import 'dotenv/config';
// import .env

app.listen(process.env.PORT);
console.log('Server on port ', process.env.PORT);
