import dotenv from 'dotenv';
dotenv.config();
const config = {
    databaseURL: process.env.DATABASE_HOSTED_URL,
};
export default config;