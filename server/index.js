const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./models/survey');
require('./services/passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

mongoose.connect(keys.mongodbURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    // serve production assets
    app.use(express.static('client/build'));

    // serve index.html for unknown routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve((__dirname, 'client', 'build', 'index.html')))
    });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);