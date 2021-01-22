

let str = 'shalom yeladim tovim';
str = str.charAt(0).toUpperCase() + str.slice(1);

for (i=1; i<str.length; i++){
  if (str[i-1] === ' ') {
    str = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1);
  }
}

