const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    todos: {
      type: [
        {
          id: { type: Number, required: true, unique: true },
          content: { type: String, required: true },
          completed: { type: Boolean, default: false },
          createdDatetime: { type: Date, default: Date.now },
          modifiedDatetime: { type: Date, required: true }
        }
      ],
      default: []
    },
    registerDatetime: { type: Date, default: Date.now },
    loginDatetime: { type: Date },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('User', userSchema);