import app from './app.js';
import { PORT } from './config.js';

app.listen(PORT || process.env.PORT);
console.log('Server on port ', PORT || process.env.PORT);
