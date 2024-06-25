import { Router } from 'express';
import {
	createSession,
	getCheckoutSession,
} from '../controllers/payment.controller.js';

const router = Router();

router.post('/create-checkout-session', createSession);
router.get('/checkout-session/:sessionId', getCheckoutSession);
router.get('/succes', (req, res) => {
	res.json({ message: 'succes' });
});
router.get('/cancel', (req, res) => {
	res.json({ message: 'cancel' });
});

export default router;
