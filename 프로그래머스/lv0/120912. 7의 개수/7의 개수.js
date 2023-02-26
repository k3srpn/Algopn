function solution(array) {
    return [...array.join('')].filter((v)=>Number(v)===7).length
}