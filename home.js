function showProductID() {
    let productID = 12345;
    function fix() {
        let productID = 67890;
        console.log('Fix product Id: ', productID);
    }
    fix();
    console.log('Show Product Id: ', productID);
}
showProductID();

