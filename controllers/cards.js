const path = require('path');
const readFile = require('../utils/read-file');

const cardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(cardsDataPath).then(data => {
  res.send(data);
  })
  .catch(err => res.send(err));
}

module.exports = getCards;