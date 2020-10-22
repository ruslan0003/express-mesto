const path = require('path');
const readFile = require('../utils/read-file');

const cardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(cardsDataPath).then((data) => {
    res.send(data);
  })
    .catch((err) => {
      console.error('err = ', err.message);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

module.exports = getCards;
