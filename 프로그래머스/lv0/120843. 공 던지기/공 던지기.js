function solution(numbers, k) {
    var answer = 0;
    let pointer = 0;
    while(k--) {
        answer = numbers[pointer]
        pointer +=2
        if(pointer >(numbers.length-1)){
            console.log(pointer)
            if(pointer - numbers.length-1 == 0) pointer = 1
            else pointer = 0
        }
    }
    return answer;
}