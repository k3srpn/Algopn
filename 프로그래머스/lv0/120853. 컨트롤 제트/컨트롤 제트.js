function solution(s) {
    var answer = 0;
    s.split(' ').map((v, i)=>{
        if(v ==='Z'){
            answer -= Number(s.split(' ')[i-1])
        }else answer += Number(v)
    })
    return answer
}