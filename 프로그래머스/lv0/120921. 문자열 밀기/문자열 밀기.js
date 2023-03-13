function solution(A, B) {
    if(A === B ) return 0
    const initial = [...A]
    let count = 0
    for(let i =0; i < initial.length ; i++){
        const poped = initial.pop()
        initial.unshift(poped)
        count++
        if(initial.join('') === B) return count
    }
    return -1
}