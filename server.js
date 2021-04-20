const express = require('express');
const app = express();
app.use(express.static('./dist/APP'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/APP/'}),
);
app.listen(process.env.PORT || 8081);