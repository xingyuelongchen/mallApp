const express = require('express');
const router = express.Router();
const app = express();
app.use(express.static('dist'));
console.log('a');

app.use(router);
app.listen(80, function () {
    console.log('ok')
})
