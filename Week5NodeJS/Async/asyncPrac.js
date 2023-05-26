const async = require('async');

// //parallel
// function shortTimeFunction(callback) {
//     setTimeout(function() {
//         callback(null, 'resultOfShortTime');
//     }, 200);
// }

// function mediumTimeFunction(callback) {
//     setTimeout(function() {
//         callback(null, 'resultOfMediumTime');
//     }, 500);
// }

// function longTimeFunction(callback) {
//     setTimeout(function() {
//         callback(null, 'resultOfLongTime');
//     }, 5000);
// }

// async.parallel([shortTimeFunction, mediumTimeFunction, longTimeFunction]).then((obj) => {
//     console.log(obj);
// }).catch((e) => {
//     console.log(e);
// })



//each

// var arrayOfData = ['Ritu', 'to', 'Si'];

// async.each(arrayOfData, function(val, callback) {
//     if (val.length > 2) {
//         console.log('valid ', val);
//         callback();
//     } else {
//         callback('invalid name ');
//     }
// }, (error) => {
//     if (error) console.log(error);
//     else console.log('success');
// })

// var arrayOfData = ['Ritu', 'Sid', 'Tom'];
// async.each(arrayOfData, function(eachUserName, callback) {
//     // Perform operation on each user.
//     console.log('Creating user ' + eachUserName);
//     callback('invalid')
// }, function(err) {
//     //If any of the user creation failed may throw error.
//     if (err) {
//         // One of the iterations produced an error.
//         // All processing will now stop.
//         console.log(err);
//     } else {
//         console.log('All user created successfully');
//     }
// });





var fun1 = function(callback) {
    const u1 = {
        name: 'abc'
    }
    callback(null, u1);
}

var fun2 = function(val, callback) {
    console.log(val);
    const u2 = {
        name: 'efg'
    }
    callback(null, u2);
}

var fun3 = function(val, callback) {
    console.log(val);
    const u3 = {
        name: 'hij'
    }
    callback(null, u3);
}


async.waterfall([fun1, fun2, fun3], (error, obj) => {
    if (error) console.log(error);
    else console.log(obj);
})