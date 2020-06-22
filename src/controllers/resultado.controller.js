const { mysql } = require('mysql');

const mysqlConnection = mysql.createConnection({
    user: 'lalvarez',
    host: '10.254.6.54',
    password: '3369200',
    database: 'dgvsops',
    port: '3306'
});

const getResultado = async (req, res) => {
    const response = await mysqlConnection.query('SELECT * FROM v_fsarscov2_dgtic_154 ORDER BY CI ASC');
    res.status(200).json(response.rows);
};

const getResultadoByCi = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await mysqlConnection.query('SELECT * FROM v_fsarscov2_dgtic_154 WHERE CI = $1', [id]);
    res.json(response.rows);
};


module.exports = {
    getResultado,
    getResultadoByCi
   
};