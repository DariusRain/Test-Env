module.exports = {
    User: {
      "type:String": ["name", "email", "password", "avatar"],
      "required:true": ["name", "email", "password"],
      "minLength:6": ["password"],
    },

    Profile: {
      "type:String": ["bio", "status", "location"],
      "type:MongooseId": ["user"],
      "ref:'users'": ["user"],
    },
};
