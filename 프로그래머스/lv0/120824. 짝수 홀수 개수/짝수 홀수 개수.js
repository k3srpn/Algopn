function solution(num_list) {
    const arr = []
    arr.push(num_list.filter((num)=> num%2 === 0).length)
    arr.push(num_list.filter((num)=> num%2 !== 0).length)
    return arr
}