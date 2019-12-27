const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Create Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));

// Engines Started
app.get('/', (req, res) => res.send('API Running'));
app.listen(PORT, () => `Server is running on ${PORT}`);