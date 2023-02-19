function solution(n) {
    let isPower = 2
    for(let i=1; i<=n ; i++){
        if(i*i===n) isPower = 1
        
    }
    return isPower;
}