const express = require('express');
const app = express();

const archivesRoutes = require('./api/routes/archives');
const archiveRoutes = require('./api/routes/archive');

app.use('/archives', archivesRoutes);
app.use('/archive', archiveRoutes);

module.exports = app;

