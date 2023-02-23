function solution(my_string) {
    return [...my_string.toLowerCase()].sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join('')
}