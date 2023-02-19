function solution(n) {
   	console.log(n.toString().split(''))
    return n ? n.toString().split('').reduce((prev,curr)=> parseInt(prev)+parseInt(curr)): 0
}