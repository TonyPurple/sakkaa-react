const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config()
require('./config/database.js')

const userRouter = require('./routes/api/users');
const authRouter = require('./routes/auth');
const messageRouter = require('./routes/messages')

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

if (process.env.NODE_ENV === 'production' || process.env.PREVIEW === 'true') {
    app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
    app.use(express.static(path.join(__dirname, 'build')));
}

//API Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/messages', messageRouter)

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});