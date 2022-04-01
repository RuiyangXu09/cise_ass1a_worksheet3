const mongoose = require('mongoose')
module.exports = () => {
  mongoose.connect('mongodb+srv://asdf520:asdf520@cluster0.nbgic.mongodb.net/books', { useNewUrlParser: true })
  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected')
  })
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB connected error', err)
  })
}
