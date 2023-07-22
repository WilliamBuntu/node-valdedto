const add = require('./notes')
const validator = require('validator');

const sum = add(37,36)

console.log(sum)

console.log(validator.isEmail('foo@bar.com'))


// fs.writeFileSync('notes.txt', 'My name is Andrew.')

// fs.appendFileSync('notes.txt', ' I live in Philadelphia.')
