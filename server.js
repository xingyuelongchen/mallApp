const express = require('express');
const router = express.Router();
const app = express();
app.use(express.static('./dist'));

router.get('/', function (req, res) {
    res.send('ok')
})
app.use(router);
app.listen(80, function () {
    console.log('ok')
})
