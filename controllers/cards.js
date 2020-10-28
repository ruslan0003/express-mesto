const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(400).send(err));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      console.error('err = ', err.message);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
  // console.log(req.user._id);
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove({ _id: req.params.cardId })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'NotValidId') {
        console.error('err = ', err.message);
        res.status(404).send({ message: 'Пользователь не найден' });
      } else {
        console.error('err = ', err.message);
        res.status(500).send({ message: 'Ошибка на сервере' });
      }
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
