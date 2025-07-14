import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env.local',
});

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default { connect };
