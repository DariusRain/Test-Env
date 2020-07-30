
const {Schema, model} = require("mongoose");

const profileSchema = new Schema({
bio:{type:String,
},

status:{type:String,
},

location:{type:String,
},

user:{type:Schema.Types.MongooseId,
ref:'users',
},
})
module.exports = profileSchema = model("profile", profileSchema);