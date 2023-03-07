function solution(dots) {
    let xMax = {
        coor: -999,
        index : 0
    }
    let yMax = {
        coor: -999,
        index: 0
    }
    let xMin = {
        coor: 999,
        index : 0
    }
    let yMin = {
        coor: 999,
        index: 0
    }
    dots.forEach((dot,i)=>{
        const [x,y] = dot 
        console.log(x)
        if (xMax['coor'] < +x) {
         	xMax['coor'] = x; 
            xMax['index'] = i;   
        }
        if (yMax['coor'] < +y){
            yMax['coor'] = y; 
            yMax['index'] = i;
        }
        if(yMin['coor'] > y){
            yMin['coor'] = y
            yMin['index'] = i;
        }
        if(xMin['coor'] > x) {
            xMin['coor'] = x
            xMin['index'] = i;
        }
    })
    return (xMax['coor'] - xMin['coor']) * (yMax['coor'] - yMin['coor'])
}