const path = require('path');

const getError = (req, res) => {
  res.status(404).send('Запрашиваемый ресурс не найден');
}

module.exports = getError;