const HTTP = require("http");
const URL = require("url").URL;
const PORT = 3000;



const SERVER = HTTP.createServer((req, res) => {
    let method = req.method;
    let path = req.url;

    if (path === "/favicon.ico") {
        res.statusCode = 404;
        res.end();
    } else {
        let params = getParams(path);
        let rolls = Number(params.get("rolls"));
        let maxSides = Number(params.get("sides"));

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.write(`${method} ${path}\n`);

        for (let numberOfRolls = rolls; numberOfRolls > 0; numberOfRolls--) {
            res.write(`${diceRoll(1, maxSides)}\n`);            
        }

        res.end();
    }

});


SERVER.listen(PORT, () => {
    console.log(`Server listening on a port ${PORT}...`);

});

function diceRoll(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getParams(path) {
    let url = new URL(path, "https://localhost:3000");
    return url.searchParams;
}
