function palindromeornot(str) {
    let revstr = str.split("").reverse().join("");
    if(str==revstr)
    {
        return true;
    }
    return false;
  }
  let str = "racecar"
  console.log(palindromeornot(str)); 