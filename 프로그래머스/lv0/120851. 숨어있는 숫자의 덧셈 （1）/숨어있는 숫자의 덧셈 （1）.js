function solution(my_string) {
    return [...my_string].filter(el=> parseInt(el)).reduce((prev,curr)=>prev+Number(curr),0)
}