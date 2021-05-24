var i;
var n = 255;
for (i = 0; i <= n; i++) {
    let result = [];

    if (i % 3 === 0) {
        result.push('fizz');
    }
    if (i % 5 === 0) {
        result.push('buzz');
    }
    if (i % 7 === 0) {
        result.push('bang');
    }
    if (i % 11 == 0) {
        result = ['bong'];
    }
    if (i % 13 === 0) {
        let checkAnElementStartsWithB = (result.filter((element) => element.startsWith('b').length)) !== 0
        if (result === '') {
            result.push('fezz');
        } else if (checkAnElementStartsWithB) {
            let itemB = result.find(element => element[0] === 'b');
            let indexB = result.indexOf(itemB)
            result.splice(indexB, 0, 'fezz');
        } else {
            result.push('fezz');
        }
    }
    if (i % 17 === 0) {
        if (result !== '') {
            result.reverse();
        }
    }

    if (result.length === 0) {
        console.log(i);
    } else {
        console.log(result.join(''));
    }
}
