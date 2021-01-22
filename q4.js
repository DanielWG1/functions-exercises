function power(a, n) {
    if (n === 0) {
      return 1;
    } else {
      let r = power(a, n-1);
      return r*a;
    }
  }