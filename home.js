let mySymbol = Symbol();

let person = {
    name: 'VedaGna',
    age: 5,
    school: false,
    [mySymbol]: 'secretInfo'
}
person['country'] = 'India';
person.school=true;

showMessage(person.country);