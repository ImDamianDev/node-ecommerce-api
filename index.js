const app = require('./src/app')

// DB conection
require('./src/db/mongooseConnection')

// Settings
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
    Server listen.
    http://localhost:${PORT}/
    http://localhost:${PORT}/api/v1
    `)
})