const {connect, connection} = require("mongoose")

const connectionString =
//insert database name!!
process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/DATEBASE NAME"

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})