const fs = require("fs");

fs.readFile(process.argv[2],(err, data) => {
   if (err) return console.error(err);
   console.log(data.toString().split('\n').length-1);
});