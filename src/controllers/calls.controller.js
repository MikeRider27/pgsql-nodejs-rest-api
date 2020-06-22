const { Pool } = require('pg');

const pool = new Pool({
    user: 'german.garcia',
    host: '192.168.1.44',
    password: 'german.garcia',
    database: 'mspbs_covid19',
    port: '5432'
});

const getCalls = async (req, res) => {
    const response = await pool.query('SELECT * FROM calls ORDER BY cedula ASC');
    res.status(200).json(response.rows);
};

const getCallsByCi = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM calls WHERE cedula = $1', [id]);
    res.json(response.rows);
};


module.exports = {
    getCalls,
    getCallsByCi
   
};