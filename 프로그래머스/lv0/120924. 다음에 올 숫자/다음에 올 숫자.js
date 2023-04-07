function solution(common) {
    const len = common.length
    const a1 = common[0]
    const a2 = common[1]
    const a3 = common[2]
    
    if(a2 - a1 === a3-a2) {
        return common[len-1] + a2-a1
    } else {
        return common[len-1] * a2/a1
    }
}