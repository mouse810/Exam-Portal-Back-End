/* importing modules */
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

/* importing files */
dotenv.config({ path: './.env' });
const config = require('./config/config');
const connection = require('./db/connection');
const Routes = require('./routes');
const swaggerJson = require('./swagger.json');
const origins = [
    'https://exam-portal-by-hritik-sanam.herokuapp.com',
    'https://exam-portal-shubhamsaini759.vercel.app',
    'https://examiantion-portal.vercel.app',
    'https://examination-portal.vercel.app',
    'https://exam-portal-tau.vercel.app',
    'http://localhost:8000',
    'http://localhost:3000'
]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (origins.indexOf(origin) === -1) {
            let msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    optionsSuccessStatus: 200
};

/* setting app middelwares */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(Routes);
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerJson));

/* setting connection to mongodb atlas database */
connection.connect().then((connected) => {

    app.listen(config.PORT || 3000, (err) => {

        if (err) throw err;

        else console.log(`App Running on port ${config.PORT || 3000}`);
    });

    console.log(connected);

}).catch((error) => {

    console.log("Database Connection Error:", error);

});