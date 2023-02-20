function solution(cipher, code) {
    return [...cipher].filter((el, i)=> i % code === code -1).join("")
}