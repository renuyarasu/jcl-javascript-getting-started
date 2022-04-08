const values = ['a', 'b', 'hello', 'c', 'd', 'e'];

const found = values.find(function (item) {
    return item.length > 1
});
console.log(found); // hello