const express = require('express');
const bodyParser = require('body-parser');
const v1Router = require("./routes/v1/index")
const pkg = require("../package.json")

// DB conection
require('./db/mongooseConnection')

// Initialization
const app = express()

// Settings
const PORT = process.env.PORT || 5000;
app.set('pkg', pkg);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        date: new Date(),
        api_route: {
            version: "v1",
            src: "/api/v1"
        }
    })
});

app.use('/api/v1', v1Router);

app.listen(PORT, () => {
    console.log(`
    Server listen.
    http://localhost:${PORT}/
    http://localhost:${PORT}/api/v1
    `)
})