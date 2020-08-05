const mongoose = require('mongoose');
const cors = require('cors');
const app = require('./src/app');

require('dotenv').config();

app.use(cors());
mongoose.connect(`${process.env.DATABASE_CONN}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
/*.then(() => console.log('MongoDB is connected'))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
