const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');


const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});


app.post('/api/users', userController.create);
app.get('/api/users', userController.getAll);
app.get('/api/users/:id', userController.getById);
app.put('/api/users/:id', userController.update);
app.delete('/api/users/:id', userController.delete);