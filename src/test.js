const fs = require("fs");

let text = fs.readFileSync("./src/colors.js", "utf8");

console.log(text);
let newText = text
  .trim()
  .replace(/\n/g, '{"name":"')
  .replace(/\t/g, '","color":"')
  .replace(/\r/g, '"},');
//   .map(s => ('{"name":' + s + '"}').replace(/\t/g, '", color: "'));
console.log(JSON.parse('[{"name":"' + newText + '"}]'));
fs.writeFileSync("./src/htmlColors.js", newText, "utf8");
