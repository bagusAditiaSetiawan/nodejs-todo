import express from 'express';
import {PrismaClient} from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const connectDB = async () => {
    try {
        await prisma.$connect()
        console.log('DB Connected')
    } catch(err) {
        console.log(err);
    }
}


const start = async () => {
    await connectDB();
    const PORT = process.env.HOST || 3333;
    app.listen(PORT, () => {
        console.log(`Listen ${PORT}`)
    })
}



export {start};