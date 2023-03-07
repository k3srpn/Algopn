function solution(sides) {
    Array.from
    const [a,b] = sides
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    const totalSum = max+min
    const grid = Array(a * b).fill().map((arr, i) => i )
    const maxIs = grid.filter((el)=> el <= max && min+el>max).length
    const anotherIs = grid.filter((el)=> el<totalSum && max<el).length
    return maxIs+anotherIs ? maxIs+anotherIs : 1
}