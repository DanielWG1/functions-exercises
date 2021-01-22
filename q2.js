function word(str) {
    let comb= '';
    for (i = 0; i < str.length; i++) {
      for (j = i; j <= str.length-1; j++) {
       comb+= str.slice(i, j+1) + ', ';
      }
    }
    return comb;
  }
  