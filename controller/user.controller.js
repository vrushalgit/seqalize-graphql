const { User, Sequelize } = require("./../models");

const getAllUsers = async (req, res) => {
  try {
    let data = await User.findAll({});
    return res.status(200).json({
      Success: true,
      Count: data.length,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Error: error,
    });
  }
};

module.exports = getAllUsers;
