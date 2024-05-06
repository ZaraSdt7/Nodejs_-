// Exercise add.remove in online shop
const products = [
    {id:1,name:'laptop',price:20000},
    {id:1,name:'pc',price:50000},
    {id:1,name:'keyoard',price:42000},
    {id:1,name:'speaker',price:10000}];
    const basckets = [
    {id:1,name:'case',price:640000},
    {id:1,name:'cabl',price:8000}]
    let userproduct = ("enter ur product:\n 1.add product\n 2.remove product") //choice item
    if(userproduct ==='1'){
        let useritem =("pls enter add product name:")
        let requestuser;
        let isproduct = products.some((product)=>{
            if (useritem === product.name){
                return requestuser=product;
            }
        })
        if(isproduct){
            let newproduct = [{id:products.length +1,name:requestuser.name , price:requestuser.price}]
            basckets.push(newproduct)
        }
        console.log("bascket:" , basckets);
    }
    else{
        console.log("product❌");
    } if(userproduct==="2"){
      let useritem =("pls enter remove product")
      let productindex = basckets.findIndex((items)=>{
        return items.name===useritem
      })
      basckets.splice(1,productindex)
      console.log(`this remove item  ${basckets}`);
    }else{
        console.log("pls correct item product");
    }
