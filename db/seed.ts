import { PrismaClient } from '@prisma/client';
import sampleData from "./sample-data";

async function main() {
    const prisma = new PrismaClient();
    //delete products and re-add new products
    await prisma.product.deleteMany();
    //create products that takes an object with data - sample data array
    await prisma.product.createMany({data: sampleData.products});

    console.log('Database seeded successfully');
}

main();

//to run: npx tsx ./db/seed