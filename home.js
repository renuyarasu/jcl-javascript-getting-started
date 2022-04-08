const values = ['a', 'b', 'c', 'd', 'e'];

const set = values.filter(function(item){
    console.log('Item: ', item);
    return item > 'b'
})

console.log(set);
