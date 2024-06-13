import express from 'express';
import 'dotenv/config';
import config from './config.js'; // Import your configuration using ES Module syntax
const app = express();
console.log('Database URL:', config.databaseURL);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});