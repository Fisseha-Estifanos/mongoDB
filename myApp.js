require('dotenv').config();
var mongoose = require('mongoose');

// connect with mongoDB using environmental variable
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// print out error logs on console
process.on('warning', (warning) => {
  console.log(warning.stack);
});

// create a person mongoose schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, require: true },
  favoriteFoods: [String],
  height: { type: Number, require: true },
  weight: { type: Number, require: true }
});

// create a person model from the personSchema
const Person = mongoose.model("Person", personSchema);

// create and save a single person object as a mongoose document
const createAndSavePerson = (done) => {
  // create a new person with the Person model
  var myPerson = new Person({name: 'Fisseha Estifanos',
                            age: 27,
                            favoriteFoods: ['shiro', 'atkilt', 'asa', 'enjera'],
                            height: 170,
                            weight: 55});

  // save the Person object as a mongoose document
  myPerson.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

// create and save multiple person objects as a mongoose document
const createManyPeople = (arrayOfPeople, done) => {
  // create an array of people
  arrayOfPeople = [{name: 'Fisseha Estifanos',
                    age: 27,
                    favoriteFoods: ['shiro', 'atkilt', 'asa', 'enjera'],
                    height: 170,
                    weight: 55},
                   {name: 'Taddesu Libasie',
                    age: 65,
                    favoriteFoods: ['shiro', 'atkilt', 'asa', 'enjera'],
                    height: 162,
                    weight: 75},
                   {name: 'Estifanos Senbeta',
                    age: 75,
                    favoriteFoods: ['anything', 'everything'],
                    height: 160,
                    weight: 70},
                   {name: 'Tezerawork Estifanos',
                    age: 75,
                    favoriteFoods: ['anything', 'everything'],
                    height: 160,
                    weight: 70}
                  ];

  // create and save many Person objects as a mongoose document
  var myArrayOfPeople = function(arrayOfPeople, done) {
    Person.create(arrayOfPeople, function (err, people) {
      if (err) return console.log(err);
      done(null, people);
    });
  };
};

// find a person by his name
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

// find a person by favorite food
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
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
