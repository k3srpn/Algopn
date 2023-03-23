function solution(polynomial) {
    const poly = polynomial.split('+')
    const regex = /[1-99]x|[1-9]x|x/g
    
    let tmp =''
    for (const el of poly){
        if(el.match(regex)) tmp+=el
    }
    const numbers = poly.filter((word)=> !word.includes('x'))
    const number = numbers.reduce((acc, curr)=> acc+=Number(curr.trim()),0)
    const onlyXs= tmp.split(' ').filter((word)=>word.length > 0)
    const numberOfx = onlyXs.reduce((acc, curr)=>{
       if(curr.length === 3) {
           return acc += Number(curr.slice(0,2))
       } else if(curr.length ===2) {
           return acc += Number(curr.slice(0,1))
       } else return acc +=1
    },0)
    if(Number(number)){
        if(numberOfx > 1) {
            return `${numberOfx}x + ${number}`.trim()
        } else if (numberOfx > 0) {
            return `x + ${number}`.trim()
        } else {
            return String(number).trim()
        }
    } else {
        if(numberOfx > 1) {
            return `${numberOfx}x`.trim()
        } else if (numberOfx > 0) {
            return `x`.trim()
        } else {
            return ''
        }
        
    }
}