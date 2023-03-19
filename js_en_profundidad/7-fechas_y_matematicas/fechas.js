'use strict'

var fecha= new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDay();
var hour = fecha.getHours()+':'+fecha.getMinutes();

var textohora = `
    El año es: ${year}
    EL mes es : ${month}
    EL dia es : ${day}
    La  hora es: ${hour}
`;

console.log(textohora);