let csvToJson = require('convert-csv-to-json');
let json = csvToJson.getJsonFromCsv("./data/data.csv");
let urls = []
for (let i = 0; i < json.length; i++) {
    urls.push(Object.values(json[i]).toString())
}
console.log(urls)

// Write to file

// fs = require('fs')
// let paused = null

// try {
//     paused = require('./out.json')
// }
// catch {
//     console.log('here')
//     let user = {
//         lastProcessedIndex: 3
//     }
    
//     fs.writeFile("./out.json", JSON.stringify(user), err => {
//         if (err) { console.log(err) }
//         else console.log("Last Index Saved")
//     }); 
//     paused = require ('./out.json')   
// }

// finally {
//     console.log(paused.lastProcessedIndex)
// }