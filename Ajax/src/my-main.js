var func = require('./my-func');

var res = document.createTextNode(func());
document.body.appendChild(res);