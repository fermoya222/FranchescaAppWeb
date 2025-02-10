-- Conectar a la base de datos
\c catalogofranchesca;

-- Crear la tabla 'productos'
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    art DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50),
    disponibilidad BOOLEAN DEFAULT TRUE,
    imagen VARCHAR(255)
);

-- Insertar productos
INSERT INTO productos (nombre, descripcion, precio, categoria, disponibilidad, imagen)
VALUES 
    ('Bikini', 'Bikini ANGRA', art 101, 'Bikini', TRUE, 'bikini1.jpg'),
    ('Bikini', 'Bikini FENICIA', art 102, 'Bikini', TRUE, 'bikini2.jpg'),
    ('Bikini', 'Bikini ALIKA', art 103, 'Bikini', TRUE, 'bikini3.jpg'),
    ('Bikini', 'Bikini MALIKA', art 104, 'Bikini', TRUE, 'bikini4.jpg'),
    ('Lenceria', 'Conjunto KIANA', art 201, 'Lenceria', TRUE, 'lenceria1.jpg'),
    ('Lenceria', 'Conjunto MAIKALA', art 202, 'Lenceria', TRUE, 'lenceria2.jpg'),
    ('Lenceria', 'Conjunto ELECTRA', art 203, 'Lenceria', TRUE, 'lenceria3.jpg'),
    ('Lenceria', 'Conjunto VIENA', art 204, 'Lenceria', TRUE, 'lenceria4.jpg');

