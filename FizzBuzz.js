let n = 250;
for (let i = 0; i <= n; i++) {
    let result = [];

    if (i % 3 === 0) {
        result.push('Fizz');
    }
    if (i % 13 === 0) {
        result.push('Fezz')
    }
    if (i % 5 === 0) {
        result.push('Buzz');
    }
    if (i % 7 === 0) {
        result.push('Bang');
    }
    if (i % 11 === 0) {
        result = ['Bong'];
    }
    if (i % 17 === 0) {
        result.reverse();
    }

    if (result.length === 0) {
        console.log(i);
    } else {
        console.log(result.join(''));
    }
}
