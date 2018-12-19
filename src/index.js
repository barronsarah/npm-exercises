"use strict";
const $ = require('jquery');

const sayHello = () => console.log('Hello!');

sayHello();

$('#hello-world').text('Hello World!!!');
$('#updating').css('background-color','pink');