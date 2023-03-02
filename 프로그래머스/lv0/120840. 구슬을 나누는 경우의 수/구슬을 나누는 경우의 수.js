function solution(balls, share) {
    return  Math.round(factorialize(balls) / (factorialize(balls-share) * factorialize(share)))
}
function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}