/**
 * Created by cramalingam on 11/22/17.
 */
//import {sensitiveWords} from 'chez-sensitive-words'
const {sensitiveWords} = require('chez-sensitive-words')

//console.log({sensitiveWords});

const filtered = sensitiveWords(
    'The new apple mac book pro will have a touchbar',
    ['pro', 'touchbar']
)
console.log({filtered});