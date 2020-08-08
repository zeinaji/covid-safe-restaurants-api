const mongoose = require('mongoose');
const app = require('./src/app');

require('dotenv').config();

mongoose.connect(`${process.env.DATABASE_CONN}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
/*.then(() => console.log('MongoDB is connected'))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });*/

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
