function solution(sides) {
    
    let max = 0
    let index = 0
    for(let i=0; i< sides.length; i++){
        if(max < sides[i]) {
            max = sides[i]
            index = i
        }
    }
    
    const result = sides.reduce((prev, curr)=> prev + curr)
    console.log(result)
    if(result - max > max) return 1
    
    else return 2
}