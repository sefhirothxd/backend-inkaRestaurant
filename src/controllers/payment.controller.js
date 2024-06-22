import Stripe from 'stripe';

const stripe = new Stripe(
	'sk_test_51Mlf6FI6fSTiR42sXBiH2AQqGjAO36roirjdDrURbof40yFgJUiICfyHhkKrnTFEqtOy00ePySyCooMYZNvjCLn100YsNBg4tX'
);

export const createSession = async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: 'lomo saltado de carne',
						description: 'lomo saltado de carne estilo peruano',
					},
					unit_amount: 1800, //18.00 es en centavos
				},
				quantity: 1,
			},
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: 'inka Kola',
						description: 'bebida gaseosa peruana',
					},
					unit_amount: 600, //6.00 es en centavos
				},
				quantity: 1,
			},
		],
		mode: 'payment', // pago de una sola vez
		success_url: 'http://localhost:3000/success',
		cancel_url: 'http://localhost:3000/cancel',
	});

	return res.json(session);
};
