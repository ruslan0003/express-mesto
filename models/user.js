const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /(https?:\/\/(www\.)?[a-zA-Z0-9-]+\.\S+#?$)/ig.test(v);
      },
      message: (props) => `${props.value} не является корректной ссылкой`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
