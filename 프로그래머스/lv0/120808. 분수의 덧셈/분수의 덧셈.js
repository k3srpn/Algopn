function solution(numer1, denom1, numer2, denom2) {
    const numer = (numer1 * denom2) + (numer2 * denom1)
    const denom = (denom1 * denom2)
    let maxi = 1
    for(let i=1; i<=numer;i++){
        if(numer % i ===0 && denom % i ===0) maxi =i
    }
    return [numer/maxi, denom / maxi]
}