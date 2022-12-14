const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const {secret} = require('./config');

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  }
  return jwt.sign(payload, secret, {expiresIn: '24h'});
}

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Ошибка при регистрации.', errors});
      }
      const {firstName, secondName, email, password} = req.body;
      const candidate = await User.findOne({email});
      if (candidate) {
        return res.status(400).json({message: 'Пользователь с такой почтой уже существует.'});
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({value: 'USER'});
      const user = new User({firstName, secondName, email, password: hashPassword, roles: [userRole.value]});
      await user.save();
      return res.json({message: 'Пользователь был успешно зарегистрирован.'});
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'Registration error'});
    }
  }
  async login(req, res) {
    try {
      const {username, password} = req.body;
      const user = await User.findOne({email});
      if (!user) {
        return res.status(400).json({message: `Пользователь ${email} не найден`});
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({message: `Пароль не верный`});
      }
      const token = generateAccessToken(user._id, user.roles);
      return res.json({token});
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'Login error'});
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {

    }
  }
}

module.exports = new authController;