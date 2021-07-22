const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ajaykart', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("we are connected")
});

const kittySchema = new mongoose.Schema({
  name: String
});
kittySchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); 
silence.speak();
silence.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})