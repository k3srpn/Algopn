function solution(array) {
    let countObj = {}
    array.reduce((acc, curr)=>  countObj[curr] ? countObj[curr]++ : countObj[curr]=1,0)
    const convert = Object.values(countObj)
    const max = Math.max(...convert)
    return convert.filter((elem)=> elem===max).length > 1 ? -1 :  Number(Object.keys(countObj).find(key => countObj[key] === max))
}