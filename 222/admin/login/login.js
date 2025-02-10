const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email y contraseña son obligatorios' });
    }

    console.log(`Email: ${email}, Contraseña: ${password}`);

    if (email === 'usuario@ejemplo.com' && password === '1234') {
        return res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
