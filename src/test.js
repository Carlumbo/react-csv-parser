const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
const FileSystem = require("fs");

CSVToJSON().fromFile("./test.csv").then(source => {
    //console.log(source.length);
    //console.log(source)
   //var obj =  JSON.parse(source[0]);
    console.log(source[0])
   // let x; for(x = 0; x < source.length; x++) {
       // console.log(source[x])
  //  }
});