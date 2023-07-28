// const chalk = require ('chalk');
const add = require('./notes')
const validator = require('validator');


const sum = add(37,36)

console.log(sum)

console.log(validator.isEmail('foo@bar.com'))
// const gg = chalk.warn(validator.isEmail('foo@bar.com'))
console.log(process.argv)

// fs.writeFileSync('notes.txt', 'My  is Andrew.')

// fs.appendFileSync('notes.txt', ' I live in Philadelphia.')
