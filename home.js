
let person = {
    name: 'VedaGna',
    age: 5,
    school: false,
    info: function(){

        showMessage(this.name+ ' is ' +this.age+ ' yrs old.');
    }    
}
person.info()
