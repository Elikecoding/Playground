// This is just a small app to help you understand node
// use node 'scriptName' to run these scipts outside of the browser 

//use npm start to run nodemon 

const othScript = require('./test2');


const b = othScript.expVar;

const a = 'His power level is...over';

console.log(`${a} ${b} !!!!`);