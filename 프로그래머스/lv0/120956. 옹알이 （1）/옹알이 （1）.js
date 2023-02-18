function solution(babblings) {
    var answer = 0;
    var conditions = ['aya', 'ye', 'woo', 'ma']
    
    
    babblings.forEach((babbling)=>{
       	var bab =babbling
       	for(let i=0; i<conditions.length; i++) {
       	    let condition = conditions[i]
       	    let result = bab.replace(condition, '*')
       	    bab = result
       	}
        let count = 0
        const list = bab.split('*')
        list.forEach((word)=>{
            if(word !== '') count += 1
        })
        if(count === 0) {
            answer += 1
        }
    })
    
    return answer;
    
}