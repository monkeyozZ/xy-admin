var fs = require("fs");
var cityFile = "./cities.json";
var provincesFile = "./province.json"

//同步加载json文件
var cityRes = JSON.parse(fs.readFileSync(cityFile));
var provincesRes = JSON.parse(fs.readFileSync(provincesFile));


//组合省和市的数据
/* var arr = provincesRes.map(provincesVal => {
  provincesVal.children = [];
  cityRes.map(cityVal => {
    
    if (provincesVal.code === cityVal.provinceCode) {
        provincesVal.name.replace(/省/g, '' );
        cityVal.name.replace(/市/g, '' );
      delete cityVal.provinceCode;
      provincesVal.children.push(cityVal);
    }
  });
  return provincesVal;
}); */

for (let index = 0; index < provincesRes.length; index++) {
    provincesRes[index].children = [];
    for (let i = 0; i < cityRes.length; i++) {
        if (provincesRes[index].code === cityRes[i].provinceCode) {
            provincesRes[index].name.replace(/省/g, '' );
            cityRes[i].name.replace(/市/g, '' );
          delete cityRes[i].provinceCode;
          provincesRes[index].children.push(cityRes[i]);
        }
        
    }
    
}

//把数据写入文件
fs.writeFile("address3.json", JSON.stringify(provincesRes), function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("数据写入成功！");
  fs.readFile("address3.json", function(err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("异步读取文件数据: " + data.toString());
  });
});