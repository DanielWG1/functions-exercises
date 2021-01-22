function reverse (str) {
    if (str === "") {
        return "";
    } else {
      let restOfStr = str.substr(1);
      let r = reverse(restOfStr)
      return r + str.charAt(0);
    }
}

