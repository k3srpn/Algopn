function solution(s) {
    const obj = {}
    const stringArr = [...s]
    const onlyOne = []
    stringArr.reduce((acc, curr)=>{
    	obj.hasOwnProperty(curr) ? obj[curr]++ : obj[curr] = 1 
    }, stringArr[0])
    for(const [key, value] of Object.entries(obj)) {
        if(value===1){
            onlyOne.push(key)
        }
    }
    return onlyOne.sort().join('')
}