const mongoose = require('mongoose');
const app = require('./src/app');

mongoose
  .connect('mongodb://database:27017/covid19-restaurants', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(8080, () => {
      // eslint-disable-next-line no-console
      console.log('App listening on port 8080');
    });
  })
  .catch((err) => {
    console.log(`${err.message}`);
  });
