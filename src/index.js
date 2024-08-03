const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const predictionRoutes = require('./routes/predictionRoutes');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.use('/api', predictionRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
