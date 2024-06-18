import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProductos = async (req, res) => {
	try {
		const products = await prisma.product.findMany();

		if (products.length > 0) {
			return res.status(200).json(products);
		} else {
			return res.status(404).json({
				message: 'No hay productos en la base de datos',
			});
		}
	} catch (error) {
		res.status(500).json({
			message: 'Error al consultar la base de datos',
			error: error.message,
		});
	}
};
export const getProductosById = async (req, res) => {
	const { id } = req.params;
	const product = await prisma.product.findUnique({
		where: {
			id: parseInt(id),
		},
	});

	if (product) {
		return res.json(product);
	} else {
		return res.status(404).json({
			message: 'Producto no encontrado',
		});
	}
};
export const createProducto = (req, res) => {
	res.json({
		message: 'creando producto',
	});
};
export const updateProducto = (req, res) => {
	const { id } = req.params;
	res.json({
		message: `actulizando producto ${id}`,
	});
};
export const deleteProducto = (req, res) => {
	res.json({
		message: `borrando producto`,
	});
};
