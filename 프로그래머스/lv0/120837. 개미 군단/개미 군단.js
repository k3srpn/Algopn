function solution(hp) {
    let health = hp
    let general = 0;
    let soldier = 0
    let normal = 0
    
    while (true){
        if(health >=5){
            health = health-5
            general++;
        } else if(health >= 3){
            health = health -3
            soldier++;
        } else if(health >= 1){
            health = health -1
            normal ++
        } else if(health ===0) {
            break;
        }
    }
    return general + soldier + normal
}