const { Pool } = require('pg');

const pool = new Pool({
    user: 'german.garcia',
    host: '192.168.1.44',
    password: 'german.garcia',
    database: 'mspbs_covid19',
    port: '5432'
});

const getCalls = async (req, res) => {
    const response = await pool.query('SELECT c.cedula,	c.nombre, (co.id) as numero_de_constancia, (co.id_call) as numero_de_llamada, (c.fecha) as fecha_registro, (co.ultima_descarga_constancia) as fecha_expedida, (select extract(days from (co.ultima_descarga_constancia - c.fecha))) as cantidad_de_días FROM calls c JOIN constancias co ON c.id = co.id_call WHERE co.ultima_descarga_constancia IS NOT NULL ORDER BY co.id ASC');
    res.status(200).json(response.rows);
};

const getCallsByCi = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT c.cedula,	c.nombre, (co.id) as numero_de_constancia, (co.id_call) as numero_de_llamada, (c.fecha) as fecha_registro, (co.ultima_descarga_constancia) as fecha_expedida, (select extract(days from (co.ultima_descarga_constancia - c.fecha))) as cantidad_de_días FROM calls c JOIN constancias co ON c.id = co.id_call WHERE c.cedula = $1', [id]);
    res.json(response.rows);
};


module.exports = {
    getCalls,
    getCallsByCi
   
};