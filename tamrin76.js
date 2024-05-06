// Exercise filter from online shop
const products = [
    {id:1,name:'laptop',price:20000},
    {id:1,name:'pc',price:50000},
    {id:1,name:'keyoard',price:42000},
    {id:1,name:'speaker',price:10000}];
    let filterproduct = products.filter((filter)=>{
        return filter<10000
    })
    let sumproduct = filterproduct.length *10000
    let sum =0;
    products.forEach((product)=>{
        sum +=product.price
    })
    let total = sum + sumproduct;
    console.log("total price:", total);
    /////////////////////////////////////////
    // 77 => array string
    const numers = [10,45,16,88,75,35,95,122]
    console.log(numers.slice(2,3));
    console.log(numers.indexOf(16));
    console.log(numers.reverse());
    console.log('77'.concat('12'));
    console.log(numers.join("+"));