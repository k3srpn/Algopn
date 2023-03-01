function solution(my_string) {
    const ops = my_string.match(/[+|\-|*|\/]/g)
    const numbers = my_string.replace(/[+|\-|*|\/]/g, '').split('  ')
    
    var answer = Number(numbers[0]);
    console.log(ops)
    console.log(numbers)
    for(let i=0; i<my_string.length -1; i++){
        if(ops[i] === '+') answer += Number(numbers[i+1])
        else if(ops[i] === '-') answer = answer - Number(numbers[i+1])
        else if(ops[i] === '*') answer *= Number(numbers[i+1])
        else if(ops[i] === '/') answer = ~~(answer /Number(numbers[i+1]))
    }
    return answer
}