function solution(array) {
    let tmp = 0
    let index = 0
    array.map((v, i)=>{
        if(v > tmp) {
            tmp = v
            index = i
        }
    })
    return [tmp, index];
}