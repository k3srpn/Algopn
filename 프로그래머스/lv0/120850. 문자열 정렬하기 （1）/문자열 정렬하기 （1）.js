function solution(my_string) {
    return [...my_string].map((el)=> Number(el) ).filter(el=> !isNaN(parseInt(el))).sort((a,b)=> a-b)  }