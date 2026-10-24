const analyticsRoutes = require('./routes/analytics');
const express = require('express');

const app = express();

app.use('/api/analytics', analyticsRoutes)

modules.exports=app;
