function revstr(str) {
    if (str.length == 0) {
      return "";
    } else {
      return revstr(str.slice(1)) + str[0];
    }
  }
let str = "recursion"
console.log(revstr(str));


 