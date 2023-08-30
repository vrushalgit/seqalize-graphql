const { ApolloError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
module.exports = {
  Mutation: {
    async signUp(
      parent,
      { name, username, email, password, role },
      { models }
    ) {
      const userExists = await models.User.findOne({ where: { email } });
      if (userExists) {
        throw new ApolloError("Email Already in use");
      }
      const user = await models.User.create({
        name,
        username,
        email,
        password,
        role,
      });
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      return { token };
    },
  },
};
