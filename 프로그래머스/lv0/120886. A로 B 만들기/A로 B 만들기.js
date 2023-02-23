function solution(before, after) {
     const bf = [...before].sort() 
     const af = [...after].sort()
       
    if(bf.join('') === af.join('') ) {
            return 1
    }
    else return 0
}