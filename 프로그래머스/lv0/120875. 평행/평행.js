function solution(dots) {
    let intercept = []
    let compare = 0
   // for(let i=0; i<dots.length -1; i++){
   //     for(let j = i+1; j<dots.length; j++){
   //         compare = getIntercept(dots[j], dots[i])
   //         intercept.push(compare)
   //     }
   // }
   // console.log(intercept)
    if(slope(dots[0], dots[1]) === slope(dots[2], dots[3])) return 1
    if(slope(dots[0], dots[2]) === slope(dots[1], dots[3])) return 1
    if(slope(dots[0], dots[2]) === slope(dots[1], dots[3])) return 1
    
    return 0
}


function slope(arr1, arr2){
    const [x1,y1] = arr1
    const [x2, y2] = arr2
    const absX = Math.abs(x2-x1)
    const absY = Math.abs(y2-y1)
    const intercept = absY / absX
    return intercept
}