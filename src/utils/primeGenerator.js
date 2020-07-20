export default (aLimit) => {
  let primeList = [];
  const limit = aLimit;

  //loop till i equals to $limit
  for (let i = 3; i <= limit; i++) {
    let c = 0;

    for (let j = 1; j <= i; j++) {
      // % modules will give the reminder value, so if the reminder is 0 then it is divisible
      if (i % j === 0) {
        //increment the value of c
        c++;
      }
    }

    //if the value of c is 2 then it is a prime number
    //because a prime number should be exactly divisible by 2 times only (itself and 1)
    if (c === 2) {
      primeList.push(i);
    }
  }
  return primeList;
};
