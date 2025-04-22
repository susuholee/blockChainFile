"use strict";

var message = function message(props) {
  var arr = [1, 2, 3];
  var arr2 = [].concat(arr);
  console.log("".concat(arr).concat(props));
};
message("안녕");
