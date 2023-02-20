function solution(rsp) {
    
    return [...rsp].map((el)=>{
        return el === "2" ? "0" : el==="5" ? "2": el === "0" ? "5" : "0"
    }).join('')
}