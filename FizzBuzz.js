var i;
var n = 100;
for (i = 1; i <= n; i++) {
    let result = '';

    if (i % 3 === 0) {
        result = 'fizz'
    }
    if (i % 5 === 0) {
        result += 'buzz'
    }
    if (i % 7 === 0) {
        result += 'bang';
    }

    if (result === '') {
        console.log(i);
    } else {
        console.log(result);
    }
}
