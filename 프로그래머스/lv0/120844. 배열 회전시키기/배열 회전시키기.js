function solution(numbers, direction) {
    let tmp = []
    if(direction === 'right'){
        const last = numbers.unshift(numbers.pop())
    } else if(direction === 'left'){
        const first = numbers.shift()
        numbers.push(first)
    }
    return numbers
}