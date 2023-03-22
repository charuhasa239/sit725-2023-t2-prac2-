var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function addNumber(x, y) {
    return parseInt(x) + parseInt(y);
}
app.use('/addTwoNumber', (req, res) => {
    var x = req.query.x;
    var y = req.query.y;
    var result = addNumber(x, y);
    res.json({ statusCode: 200, data: result, meassage: " success" });
});

app.listen(port, () => {
    console.log("app listens to" + port)
});