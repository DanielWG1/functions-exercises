
function removeDup(str) {
    let counts= {}
    for (i = 0; i < str.length; i++) {
      let count= counts[str[i]];
      if (count === undefined) {
        counts[str[i]] = 1;
      } else {
         counts[str[i]] = count + 1;
      }
    }
    let res= '';
     for (i = 0; i < str.length; i++) {
        if (counts[str[i]] === 1) {
          res+= str[i];
          return res;
      }
     }
  }
  