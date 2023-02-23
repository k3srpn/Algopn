function solution(age) {
   	const ageStr = String(age).split('')
    const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ]
    return ageStr.map((v,i)=>alphabet[Number(v)]).join('')
}