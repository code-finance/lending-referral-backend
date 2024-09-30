const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const health = require('./router/health');
const referral = require('./router/referral');
const point = require('./router/point');
const claim = require('./router/claim');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./lib/swaggerDoc');

const app = express();
const port = process.env.PORT || 6001;

const cron = require('node-cron');
const batcher = require('./controller/batcher/index');

app.use(
  cors({
    // origin: [
    //   "http://localhost:3000",
    // ],
    credentials: true,
  }),
);
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// const maxAge = 1000 * 60 * 60 * 24;  //EXPIRE_ACCESSTOKEN=1d same
// const maxAge = 1000 * 30;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/health', health);
app.use('/api/referral', referral);
app.use('/api/point', point);
app.use('/api/claim', claim);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

// Schedule the cron job to run every minute
const task = cron.schedule('*/10 * * * * *', async () => {
  console.log('----------------------------------------------------------------------------');
  await batcher.liquidityBatch();
  // await batcher.stakingBatch();
  // await batcher.referralBatch();
});

task.start();
