require('formdata-polyfill');
require('es6-promise').polyfill();

window.addEventListener('DOMContentLoaded', () => {
'use strict';

let timer = require('./parts/timer');

    timer ();
    
});


if ('NodeList' in window && !NodeList.prototype.forEach) {
console.info('polyfill for IE11');
NodeList.prototype.forEach = function (callback, thisArg) {
  thisArg = thisArg || window;
  for (var i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};
}