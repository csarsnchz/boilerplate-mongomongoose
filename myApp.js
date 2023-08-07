require('dotenv').config();

const mongoose = require('mongoose');
const connectionString = process.env['MONGO_URI'];
const Schema = mongoose.Schema;

const connectDB = async () => {
  const uri = connectionString;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(uri, options);
    console.log('Successfully connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};

connectDB().catch(console.dir);

const personSchema = new Schema({
name: {type: String, required: true, unique: true},
age: {type: Number, required: false},
favoriteFoods: {type: [String], required: false}
});

let Person;
Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
let newPerson = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  newPerson.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
    });
};

let arrayOfPeople = [
                {name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]},
                {name: "Jane Doe", age: 54, favoriteFoods: ["eggs", "fish", "fresh fruit, chicken"]},
                {name: "Jane Foster", age: 24, favoriteFoods: ["eggs", "fish", "fresh fruit, meat"]},
                {name: "Jane Fish", age: 30, favoriteFoods: ["eggs", "fish", "fresh fruit, pizza"]},
                {name: "Juliette Fonda", age: 23, favoriteFoods: ["eggs", "fish", "fresh fruit, burgers"]},
                {name: "Janette Folgar", age: 25, favoriteFoods: ["eggs", "fish", "fresh fruit, tacos"]},
                {name: "Janet Ford", age: 70, favoriteFoods: ["eggs", "fish", "fresh fruit, pork"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.error(err);
    done(null, data)
    });
};

let personName = "Jane Fish";

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, personFound) => {
    if (err) return console.log(err);
    done(null, personFound);
    console.log(personFound);
    });  
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
