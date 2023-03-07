function solution(id_pw, db) {
    var answer = '';
    const [idInput, pwInput] = id_pw
    for(const account of db) {
        const [id,pw] = account
        if(idInput === id){
            if(pwInput === pw) return 'login'
            else if(pwInput !== pw) return 'wrong pw'
        }
    }
    return 'fail'
}