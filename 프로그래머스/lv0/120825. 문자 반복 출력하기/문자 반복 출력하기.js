function  solution(my_string, n) {
    const answer = []
    const arr = my_string.split('')
    for(let i=0; i< arr.length; i++){
        const word = arr[i]
        for(let j=0; j< n ; j++){
        	answer.push(word)
        }
    }
    
    return answer.join('')
}