import Stripe from 'stripe';

const stripe = new Stripe(
	'sk_test_51Mlf6FI6fSTiR42sXBiH2AQqGjAO36roirjdDrURbof40yFgJUiICfyHhkKrnTFEqtOy00ePySyCooMYZNvjCLn100YsNBg4tX'
);

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
			'http://localhost:3000/carrito/completado?session_id={CHECKOUT_SESSION_ID}',
		cancel_url: 'http://localhost:3000/cancel',
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
