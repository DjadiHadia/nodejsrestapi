const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');
const Client = require('./models/client');
const Car = require('./models/car');

const app = express();
const PORT = process.env.PORT || 8000; // Use environment variable or default to 8000

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Test route to see on kubernetes 8
app.get('/', (req, res, next) => {
  res.send('Hello oops hadia i mean');
});

// CRUD routes
app.use('/users', require('./routes/users'));
app.use('/cars', require('./routes/cars'));
app.use('/clients', require('./routes/clients'));
app.use('/agencies', require('./routes/agencies'));

// Error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// Sync database
const syncDatabase = async () => {
  try {
    sequelize.sync();
    if (process.env.NODE_ENV !== 'test') { // Only listen when not in test environment
      console.log("Database connected");
      app.server = app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    }
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

// Call the function to sync the database
syncDatabase();

module.exports = app; // Export app for testing




/*const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');
const Client = require('./models/client');
const Car = require('./models/car');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

//test route
app.get('/', (req, res, next) => {
  res.send('Hello World');
});

//CRUD routes
app.use('/users', require('./routes/users'));
app.use('/cars', require('./routes/cars'));
app.use('/clients', require('./routes/clients'));
app.use('/agencies', require('./routes/agencies'));

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//sync database
sequelize
  .sync()
  .then(result => {
    console.log("Database connected");
    app.listen(8000);
  })
  .catch(err => console.log(err));*/