// Function: Function Scope
// showMessage('Message')

let key = 100;

function message(value) {
    let keyGenerator = function () {
        let key = 10;
        console.log('Key Generator: ', key);
        return key;
    }
    let code = value * keyGenerator();
    showMessage(code);
    console.log('Code Generator: ', key);
    return code
}
let getMessage = message(100);

console.log(getMessage);