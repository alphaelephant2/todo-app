const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.json()); //???
app.use(express.urlencoded( { extended: true })); //true or false?
app.use(routes);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})