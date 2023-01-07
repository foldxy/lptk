const sieve = function(max = 10000) {
  let prime = [];
  for (let i = 0; i <= max;i++) {
    prime[i] = true;
  }
  prime[1] = false;

  for (let p = 2; p * p <= max; p++) {
    if (prime[p] === true) {
      for (let q = p * 2; q <= max; q += p) {
        prime[q] = false;
      }
    }
  }

  return prime;
}

module.exports = sieve;