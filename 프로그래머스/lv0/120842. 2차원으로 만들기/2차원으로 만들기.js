function solution(num_list, n) {
    var answer = [];
    
    for(let i=1; i<=num_list.length; i++){
        const skip = (i-1) * n
        const take = n
        if(i*take >  num_list.length) return answer
        answer.push(num_list.slice(skip,i*take))
    }
    return answer;
}