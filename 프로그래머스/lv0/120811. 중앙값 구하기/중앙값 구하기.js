function solution(array) {
    const index = ~~(array.length/2)
    array.sort((a,b)=>a-b)
    return array[index];
}