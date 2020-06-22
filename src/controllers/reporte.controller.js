const { Pool } = require('pg');

const pool = new Pool({
    user: 'jalvarez',
    host: '10.1.79.13',
    password: 'Wae8eilo*7ph_oyi!sh1',
    database: 'covid19',
    port: '5432'
});

const getReporte = async (req, res) => {
    const response = await pool.query('SELECT * FROM covid19.v_reporte_registro_paciente ORDER BY numero_documento ASC');
    res.status(200).json(response.rows);
};

const getReporteByCi = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM covid19.v_reporte_registro_paciente WHERE numero_documento = $1', [id]);
    res.json(response.rows);
};


module.exports = {
    getReporte,
    getReporteByCi
   
};