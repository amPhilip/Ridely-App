/*const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE)

    console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB*/

/*
const mongoose = require('mongoose');


const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then( ()=>{

    console.log('connection successful');

}).catch( (err)=>{

    console.log('no connection');

});
*/

