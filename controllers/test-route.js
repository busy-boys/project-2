const sequelize = require('../config/connection');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json('Try1 server is up! \n database is up!');
  } catch (error) {
    res.status(500).json('error connectigng to db', error);
  }
});

module.exports = router;
