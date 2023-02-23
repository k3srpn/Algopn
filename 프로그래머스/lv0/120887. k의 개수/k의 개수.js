function solution(i, j, k) {
    let num = i
    let str =''
    while(num<=j){
        str += String(num)
        ++num
    }
    return [...str].filter(v=>v===String(k)).length
    
        
}