let input = ['blue', 'red', 'green', 'red', 'red', 'green'];

const winner = (teams) => {
    let hashMap = {};
    teams.forEach((team) => {
        hashMap[team] = hashMap[team] + 1 || 1;
    })
    let winnerScore = 0;
    let winnerTeam = '';
    for (let key in hashMap) {
        if (hashMap[key] > winnerScore) {
            winnerScore = hashMap[key];
            winnerTeam = key;
        }
    }
    return winnerTeam;
}

console.log(winner(input));