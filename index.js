const mongoose = require('mongoose');
const app = require('./src/app');

mongoose
  .connect('mongodb://mongo:27017/covid19-restaurants', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log(`${err.message}`);
  });

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port 3000`);
});
