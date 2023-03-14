const word = require("fs").readFileSync("/dev/stdin").toString().trim();
if(word === word.split('').reverse().join('')) console.log(1)
else console.log(0)