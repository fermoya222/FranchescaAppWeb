// import express from 'express'

// const rutasCRUD = express.Router();

// rutasCRUD.use('/api/v1',express.json())



// export default rutasCRUD

import express from 'express';
import pg from 'pg';
import pool from '../modulos/conexion.mjs';


const router = express.Router();

// Obtener todos los bikinis
async function obtenerBikinis() {
    try {
        const resultado = await pool.query('SELECT * FROM productos');
        return resultado.rows;
    } catch (error) {
        throw error;
    }
}

router.get('/obtenerBikinis', async (req, res) => {
    try {
        const datos = await obtenerBikinis();
        res.status(200).json(datos);
    } catch (error) {
        res.status(404).json({ mensaje: 'Error al obtener los bikinis' });
    }
});

// Obtener un bikini por ID
async function obtenerBikiniPorId(id) {
    try {
        const resultado = await pool.query('SELECT * FROM productos WHERE id=$1', [id]);
        return resultado.rows;
    } catch (error) {
        throw error;
    }
}

router.get('/obtenerBikinis/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const datos = await obtenerBikiniPorId(id);
        res.status(200).json(datos);
    } catch (error) {
        res.status(404).json({ mensaje: 'Error al encontrar el bikini' });
    }
});

// Agregar un nuevo bikini
async function agregarBikini(nombre, descripcion, articulo, categoria, disponibilidad, imagen) {
    try {
        const resultado = await pool.query(
            `INSERT INTO productos(nombre, descripcion, articulo, categoria, disponibilidad, imagen)
            VALUES($1, $2, $3, $4, $5, $6) RETURNING id`, [nombre, descripcion, articulo, categoria, disponibilidad, imagen]);

        return resultado.rows;
    } catch (error) {
        throw error;
    }
}

router.post('/agregarBikini', async (req, res) => {
    const { nombre, descripcion, articulo, categoria, disponibilidad, imagen } = req.body;

    if (!nombre || !descripcion || !articulo || !categoria || !disponibilidad || !imagen) {
        return res.set('content-type', 'application/json').status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        const datos = await agregarBikini(nombre, descripcion, articulo, categoria, disponibilidad, imagen);
        res.status(200).json({ mensaje: 'Bikini dado de alta' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al insertar bikini' });
    }
});

// Modificar un bikini existente
async function modificarBikini(id, nombre, descripcion, art, categoria, disponibilidad, imagen) {
    try {
        const resultado = await pool.query(
            `UPDATE productos
            SET nombre=$2, descripcion=$3, art=$4, categoria=$5, disponibilidad=$6, imagen=$7
            WHERE id=$1 returning id`, [id, nombre, descripcion, art, categoria, disponibilidad, imagen]);

        return resultado.rows;
    } catch (error) {
        throw error;
    }
}

// router.put('/modificarBikini/:id', async (req, res) => {
//     const { id } = req.params;
//     const datos = req.body;
//     const { nombre, descripcion, articulo, categoria, disponibilidad, imagen } = req.body;

//     // if (!nombre || !descripcion || !articulo || !categoria || !disponibilidad || !imagen) {
//     //     return res.set('content-type', 'application/json').status(400).json({ error: 'Todos los campos son obligatorios' });
//     // }

//     try {
//         datos = await modificarBikini(id, nombre, descripcion, articulo, categoria, disponibilidad, imagen);
//         res.status(200).json({ mensaje: 'Bikini modificado con éxito' });
//     } catch (error) {
//         res.status(500).json({ mensaje: 'Error al modificar bikini' });
//     }
// });

router.put('/modificarBikini/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, art, categoria, disponibilidad, imagen } = req.body;

    // Validar que todos los campos requeridos estén presentes
    // if (!nombre || !descripcion || !art || !categoria || !disponibilidad || !imagen) {
    //     return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    // }

    try {
        // Llamada a la función de actualización en la base de datos
        const bikiniActualizado = await modificarBikini(id, nombre, descripcion, art, categoria, disponibilidad, imagen);
        
        // Respuesta con los datos modificados
        res.status(200).json({
            mensaje: 'Bikini modificado con éxito',
            bikini: bikiniActualizado,
        });
    } catch (error) {
        console.error('Error al modificar bikini:', error); // Registro del error para depuración
        res.status(500).json({ mensaje: 'Error al modificar bikini' });
    }
});




// Eliminar un bikini
async function eliminarBikini(id) {
    try {
        const resultado = await pool.query(
            `DELETE FROM productos WHERE id=$1`, [id]);

        return resultado.rows;
    } catch (error) {
        throw error;
    }
}

router.delete('/eliminarBikini/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const eliminar = await eliminarBikini(id);
        res.status(200).json({ mensaje: 'Bikini eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar bikini' });
    }
});

export default router;
