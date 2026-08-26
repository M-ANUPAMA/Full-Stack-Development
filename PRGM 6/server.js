const http = require("http");

const server = http.createServer(function(req, res) {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write(`
        <html>
        <head>
            <title>Node.js Server</title>
        </head>

        <body>
            <h1>Welcome to Node.js</h1>
            <p>This HTML page is sent by a Node.js server.</p>
        </body>
        </html>
    `);

    res.end();

});

server.listen(3000, function() {

    console.log("Server running at http://localhost:3000");

});