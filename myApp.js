require('dotenv').config();
var mongoose = require('mongoose');

console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// to delete I guess
// let Person;

// create a person mongoose schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, require: true },
  favoriteFoods: [String],
  height: { type: Number, require: true },
  wieght: { type: Number, require: true }
});

// create a person model from the personSchema
const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  // create a new person with the Person model
  var myPerson = new Person({name: 'Fisseha Estifanos',
                            age: 27,
                            favoriteFoods: ['shiro', 'atkilt', 'asa', 'enjera'],
                            height: 170,
                            wieght: 55});
  // save the document
  myPerson.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  // create an array of people
  arrayOfPeople = [{name: 'Fisseha Estifanos',
                    age: 27,
                    favoriteFoods: ['shiro', 'atkilt', 'asa', 'enjera'],
                    height: 170,
                    wieght: 55},
                   {name: 'Taddesu Libase',
                    age: 65,
                    favoriteFoods: ['shiro', 'atkilt', 'asa', 'enjera'],
                    height: 162,
                    wieght: 75},
                   {name: 'Estifanos Senbeta',
                    age: 75,
                    favoriteFoods: ['anything', 'everything'],
                    height: 160,
                    wieght: 70},
                   {name: 'Tezerawork Estifanos',
                    age: 75,
                    favoriteFoods: ['anything', 'everything'],
                    height: 160,
                    wieght: 70}];

  // create and save many people
  var myArrayOfPeople = function(arrayOfPeople, done) {
    Person.create(arrayOfPeople, function (err, people) {
      if (err) return console.log(err);
      done(null, people);
    });
  };
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
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
