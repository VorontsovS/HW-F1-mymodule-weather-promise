const weather = require('weather-js');

// lvl 1
// const weatherLocZip = (lockZip) => {
//     weather.find({search: lockZip, degreeType: 'F'}, function(err, result) {
//         if(err) console.log(err);
//         //console.log(JSON.stringify(result, null, 2));
//         console.log(result[0].current.temperature);
//     });    
// }

// module.exports = weatherLocZip;


// lvl 2
const weatherLocZip = (lockZip) => {
    return new Promise((resolve, reject) => {
        weather.find({search: lockZip, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
            resolve(result[0].current.temperature);
        });
    });  
}

module.exports = weatherLocZip;