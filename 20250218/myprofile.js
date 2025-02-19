const personAge  = require('./age'); // [ { age: '24' } ]
const personName = require('./name');

console.log(`내이름은 ${personName[0].name} 이고 나이는 ${personAge[0].age} 이야`);