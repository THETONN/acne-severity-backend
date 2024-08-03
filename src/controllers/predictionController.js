const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

exports.predict = async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }
    console.log('Received request:', req.file);
    const formData = new FormData();
    formData.append('image', fs.createReadStream(req.file.path));

    console.log('FormData created:', formData);

    const response = await axios.post('https://acne-severity-backend-39d1e322c3ee.herokuapp.com/predict', formData, {
      headers: formData.getHeaders()
    });

    console.log('Response from model server:', response.data);

    res.send(response.data);
  } catch (error) {
    console.error('Error:', error.message, error.response ? error.response.data : 'No response data');
    res.status(500).send(error.message);
  }
};
