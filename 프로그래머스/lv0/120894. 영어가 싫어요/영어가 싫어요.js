function solution(numbers) {
    const num = []
    let arr = []
    numbers.split('').forEach((v)=> {
        arr.push(v)
        if(arr.join('')=== 'zero') {num.push(0); arr=[]}
        if(arr.join('')=== 'one') {num.push(1); arr=[]}
        if(arr.join('')=== 'two') {num.push(2); arr=[]}
        if(arr.join('')=== 'three') {num.push(3); arr=[]}
        if(arr.join('')=== 'four') {num.push(4); arr=[]}
        if(arr.join('')=== 'five') {num.push(5); arr=[]}
        if(arr.join('')=== 'six') {num.push(6); arr=[]}
        if(arr.join('')=== 'seven') {num.push(7); arr=[]}
        if(arr.join('')=== 'eight') {num.push(8); arr=[]}
        if(arr.join('')=== 'nine') {num.push(9); arr=[]}
        
    })
    return parseInt(num.join(''))
}