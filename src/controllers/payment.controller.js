import Stripe from 'stripe';
import dotenv from 'dotenv';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createSession = async (req, res) => {
	const items = req.body.items;
	const sendItems = items.map((item) => {
		return {
			price_data: {
				currency: 'usd',
				product_data: {
					name: item.name,
					description: item.description,
				},
				unit_amount: item.price * 100,
			},
			quantity: item.quantity,
		};
	});

	const session = await stripe.checkout.sessions.create({
		line_items: sendItems,
		mode: 'payment', // pago de una sola vez
		phone_number_collection: {
			enabled: true,
		},
		shipping_address_collection: {
			allowed_countries: ['US'],
		},
		success_url:
			'https://inka-restaurant.vercel.app/carrito/completado?session_id={CHECKOUT_SESSION_ID}',
		cancel_url: 'https://inka-restaurant.vercel.app/cancel',
	});

	return res.json(session.url);
};

export const getCheckoutSession = async (req, res) => {
	const { sessionId } = req.params;

	const allInfo = Promise.all([
		await stripe.checkout.sessions.listLineItems(sessionId),
		await stripe.checkout.sessions.retrieve(sessionId),
	]);

	return res.json(await allInfo);
};
