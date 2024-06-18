import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/users.routes.js';
import productoRoutes from './routes/productos.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => res.json({ message: 'Api en funcionamiento' }));

app.use(userRoutes);
app.use('/api', productoRoutes);
app.use('/api', authRoutes);

//error Handler
app.use((err, req, res, next) => {
	res.status(500).json({
		status: 'error',
		message: err.message,
	});
});

export default app;
