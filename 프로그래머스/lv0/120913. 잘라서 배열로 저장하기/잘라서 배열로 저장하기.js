function solution(my_str, n) {
    var answer = [];
    for(let i=1;  (i-1) * n < my_str.length; i++){
    	let skip = (i -1) * n 
        if(skip === 0) {
      		answer.push(my_str.slice(0,n))      
        } else {
    		answer.push(my_str.slice(skip,skip+ n))
        }
    }
    console.log(answer)
    return answer;
}