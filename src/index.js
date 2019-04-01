require('formdata-polyfill');
require('es6-promise').polyfill();

window.addEventListener('DOMContentLoaded', () => {
'use strict';

let modal = require('./parts/modal'),
    tabs = require('./parts/tabs'),
    modalSixtySeconds = require('./parts/modalSixtySeconds'),
    timer = require('./parts/timer'),
    forms = require('./parts/forms'),
    image = require('./parts/image'),
    calc = require('./parts/calc');


    modal ();
    tabs ();
    modalSixtySeconds ();
    timer ();
    forms ();
    image ();
    calc ();

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