const {Schema} = require("mongoose")

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            // Set default value to the current timestamp
            // Set default value to the current timestamp
        },
        username: {
            type: String,
            required: true
        },
        //reactions:{}
        // Array of nested documents created with the reactionSchema
    }
)