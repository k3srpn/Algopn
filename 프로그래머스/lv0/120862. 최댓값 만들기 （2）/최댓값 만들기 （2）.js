function solution(numbers) {
    numbers.sort((a,b)=>b-a)
    if(numbers[numbers.length -1 ] * numbers[numbers.length -2] < numbers[0] * numbers[1]) return numbers[0] * numbers[1]
    else return numbers[numbers.length -1] * numbers[numbers.length -2]
}