function solution(quiz) {
    var answer = [];
    quiz.forEach((quiz)=>{
       let result = 0
       const [left, z] = quiz.split('=')
       const [x, operator, y] = left.trim().split(" ")
       if(operator === '-') {
       	if(parseInt(x.trim()) - parseInt(y.trim()) == parseInt(z)){
            answer.push('O')
        }else {
            answer.push('X')
        }
       } else if (operator === '+') {
       		if(parseInt(x.trim()) + parseInt(y.trim()) == parseInt(z)){
                answer.push('O')
        	} else {
                answer.push('X')
            }
       }
    })
    return answer;
}