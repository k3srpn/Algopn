function solution(n) {
    var answer = [];
    if(n%2 === 0) answer.push(2)
    while(n%2 == 0) {
        n=n/2
    }
    for(let i=3; i <=n;i+=2){
        if(n%i ==0) answer.push(i)
        while(n%i ==0){
            n=n/i
        }
    }
    return answer;
}