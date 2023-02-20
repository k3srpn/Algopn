function solution(my_string) {
    return [...my_string].map((el)=>{
        const code = el.charCodeAt(0)
        if(code>=65 && code <= 90){
            return String.fromCharCode(code + 32)
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(code -32)
        }
    }).join('')
}