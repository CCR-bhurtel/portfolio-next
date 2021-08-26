const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception: shutting down the app');
  console.log(err.name, err.message);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION: Shutting down the app');
  server.close(() => {
    process.exit(1);
  });
});

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log('App listening to the requests');
});
