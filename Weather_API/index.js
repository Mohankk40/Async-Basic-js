const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

require('dotenv').config();

const PORT  = process.env.PORT || 5000;

const app = express();

// Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 50
})
app.use(limiter)
app.set('trust proxy', 1)

// Set static folder
app.use(express.static('Weather_app'))

//Routes
app.use('/api', require('../Weather_API/routes'))

// Enable cors
app.use(cors());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));