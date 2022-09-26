const test1 = require("./test1");
const test2 = require("./test2");
// import './test3.test';
// inline loader
import txt from "test-loader!./test3.txt";

console.log('txt :>> ', txt);

export default {
  test1,
  test2,
};
