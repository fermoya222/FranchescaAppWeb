import express from 'express';
import router from './rutas/rutas.api-crud.mjs'

const app = express();

app.use(express.static('www'));
app.use('/admin', express.static('admin'))

app.use(express.json());

app.use('/api', router);
app.all('/*', function (req, res, next){
    res.status(500).json({ mensaje: 'RUTA INVALIDA'});
})


app.listen(3000);