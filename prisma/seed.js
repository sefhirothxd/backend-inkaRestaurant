import { categories } from './data/categories.js';
import { products } from './data/products.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	try {
		await prisma.category.createMany({
			data: categories,
		});
		await prisma.product.createMany({
			data: products,
		});
	} catch (error) {
		console.log(error);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (error) => {
		console.log(error);
		await prisma.$disconnect();
	});
