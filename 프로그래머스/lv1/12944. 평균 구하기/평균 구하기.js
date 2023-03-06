function solution(arr) {
    return arr.reduce((acc, curr) => {
        return acc+curr
    }, 0)/arr.length
}