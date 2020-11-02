const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send(err));
};

const getUser = (req, res) => {
  User.findOne(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      console.error('err = ', err.message);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.error('err = ', err.message);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
