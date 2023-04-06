function solution(s){
	const p = s.toLowerCase().match(/p/g) ? s.toLowerCase().match(/p/g).length : 0
    const y = s.toLowerCase().match(/y/g) ? s.toLowerCase().match(/y/g).length : 0
    
   return p===y ? true: false
}