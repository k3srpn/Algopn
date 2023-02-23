function solution(array, n) {
    var answer = 0;
    array.push(n)
    const index = array.sort((a,b)=>a-b).indexOf(n)
    const next =  array[index+1]
    const nextDiff = Math.abs(next - n)
    
    const prev = array[index-1]
    const prevDiff = Math.abs(prev-n)
    return index === 0 ? array[1] : index === array.length -1 ? array[array.length-2] : nextDiff >= prevDiff ? prev:next
}