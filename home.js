// Function: Function Scope
// showMessage('Message')

let key = 100;

function message(value) {
    let code = value * key;
    return code
}
console.log(message(key)); // 10000
console.log(message(5)); // 500