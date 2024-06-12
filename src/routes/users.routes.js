import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
	res.send('Obteniendo usuarios');
});
router.get('/users/:id', (req, res) => {
	const { id } = req.params;
	res.send('obteniendo id usuario' + id);
});
router.post('/users/:id', (req, res) => {
	res.send('crear usuario');
});
router.get('/users/:id', (req, res) => {
	res.send('eliminando usuario');
});
router.put('/users', (req, res) => {
	const { id } = req.params;
	res.send('actulizando usuario' + id);
});

export default router;
