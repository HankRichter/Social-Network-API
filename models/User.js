const {Schema, model} = require("mongoose")
const thoughtSchema = require("./Thought")

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //valid email with mongoose validaiton
        },
        thoughts: [thoughtSchema],
        //Array of _id values referencing the User model (self-reference)
        //friends:[]
    }
)

const User = model("user", userSchema)

module.exports = User;