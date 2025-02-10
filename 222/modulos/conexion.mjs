import pg from 'pg'
const pool = new pg.Pool({
    host: 'localhost',
    database: 'tienda',
    port: 5432,
    user: 'postgres',
    password: '123'

})
export default pool