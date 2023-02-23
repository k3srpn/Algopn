function solution(n) {
    let fact = 1
    let count  = 1
    while(fact <= n) {
        count++
        fact = factorial(count)
    }
    return count-1
}

function factorial(num){
    let returnNumber = 1	
    for(let i=1; i<=num; i++){
       returnNumber *= i
    }
    return returnNumber
}