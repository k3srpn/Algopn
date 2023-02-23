function solution(n) {
    var answer =0
    for (let i=1; i<=n; i++){
        let divisor = []
        for(let j=1; j<=i; j++) {
            if(i%j === 0) divisor.push(j)
        }
        if(divisor.length >= 3) answer++
    }
    return answer;
}