function solution(box, n) {
    const [width, length, height] = box
    
    return ~~(width/n) * ~~(length/n) * ~~(height/n)
}