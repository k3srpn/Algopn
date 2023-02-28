function solution(my_string) {
    var answer = 0;
    const regex = /[0-9][0-9][0-9][0-9]|[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/g
    const naturalNumber =(my_string.match(regex)) || [0]
       answer =  naturalNumber.reduce((acc, curr)=> Number(acc)+Number(curr), 0)
    return answer
}