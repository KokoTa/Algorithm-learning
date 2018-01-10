function getMostGold(n, w, g, p) {
    let preResult = [];
    let result = [];

    for(let i = 0; i <= n; i++) {
        if(i < p[0]) {
            preResult[i] = 0;
        } else {
            preResult[i] = g[0];
        }
    }

    console.log(preResult);
}

let g = [400, 500, 200, 300, 350];
let p = [5, 5, 3, 4, 3];

getMostGold(5, 10, g, p);