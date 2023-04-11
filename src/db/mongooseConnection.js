require('dotenv').config();

// Requerir el paquete mongoose
const mongoose = require('mongoose');

// URL de conexión a la base de datos MongoDB
const dbUrl = process.env.MONGODB_URI;

// Establecer la conexión a la base de datos
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Manejar los eventos de conexión
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', function () {
    console.log('Conexión exitosa a la base de datos');
});