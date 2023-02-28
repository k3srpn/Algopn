function solution(emergency) {
    const answer = []
    answer.fill(0,0,emergency.length - 1)
    const clone = []
    emergency.forEach((v)=>{
        clone.push(v)
    })
    clone.sort((a,b)=>b-a)// 내림차순 정렬
    emergency.forEach((v,i)=>{
        answer[i] = clone.indexOf(v)+ 1
    })
    return answer
} 

