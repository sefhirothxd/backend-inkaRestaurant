import { Router } from 'express';
import { createSession } from '../controllers/payment.controller.js';

const router = Router();

router.get('/create-checkout-session', createSession);
router.get('/succes', (req, res) => {
	res.json({ message: 'succes' });
});
router.get('/cancel', (req, res) => {
	res.json({ message: 'cancel' });
});

export default router;
