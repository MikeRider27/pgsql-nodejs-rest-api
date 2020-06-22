const { Pool } = require('pg');

const pool = new Pool({
    user: 'german.garcia',
    host: '192.168.1.44',
    password: 'german.garcia',
    database: 'mspbs_covid19',
    port: '5432'
});

const getAgenda = async (req, res) => {
    const response = await pool.query('SELECT * FROM agendados ORDER BY cedula ASC');
    res.status(200).json(response.rows);
};

const getAgendaByCi = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM agendados WHERE cedula = $1', [id]);
    res.json(response.rows);
};


module.exports = {
    getAgenda,
    getAgendaByCi
   
};