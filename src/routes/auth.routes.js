import Router from 'express';
import {
	login,
	prefil,
	register,
	sigout,
} from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/sigout', sigout);
router.get('/prefil', prefil);

export default router;
