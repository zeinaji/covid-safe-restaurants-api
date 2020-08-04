const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect('mongodb://mongo:27017/covid19-restaurants', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
