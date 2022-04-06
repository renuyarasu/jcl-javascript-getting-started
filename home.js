// Block Scope Using var, let and const
if (true) {
    const mess = 'Hey!'
    showMessage(mess)
}
console.log(mess); // var: Hey!
console.log(mess); // let: Uncaught ReferenceError: mess is not defined
console.log(mess); // const: Uncaught ReferenceError: mess is not defined