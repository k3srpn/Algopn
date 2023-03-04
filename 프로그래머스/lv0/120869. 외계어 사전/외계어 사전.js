function solution(spell, dic) {
    var answer = 0;
    dic.forEach((word)=>{
    	let count = 0;
        spell.forEach((char)=>{
        	const re = new RegExp(`${char}`,"gi"); 
            if(word.match(re) instanceof Array){
                if(word.match(re).length === 1) count++
                console.log(word, char, count)
            }
            
        })
        if(word.length === count && spell.length === count) {
            answer++
        }
    })
    return answer || 2;
}