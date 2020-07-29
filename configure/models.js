module.exports = {
  User: {
    String: ["name", "email", "password", "avatar"],
    required: ["name", "email", "password"],
    minLength: ["password"],
  },

  Profile: {
      String: ["bio", "status", "location"],
      MongooseId: ["user"],
      refs: ["user"]
  },
};
