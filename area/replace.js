var fs = require("fs");
var cityFile = "./address.js";
// var cityRes = fs.readFileSync(cityFile)
var cityRes = require(cityFile)

// var string = cityRes.replace(/省/g, '' )
console.log(cityRes)
/* fs.writeFile("address1.json", string, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("数据写入成功！");
    fs.readFile("address.json", function(err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
    });
  }); */