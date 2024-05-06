//Use-includes
const usernames = ("enter username:")
const users = ['zara','amir','ali','reza'];
const islogin = usernames.includes[users]
if(islogin){
    console.log("welcome back");
    
}else{
    console.log("frist register...");
}
//////////////////////////////
// Method-some=>for obj
const obj = [{id:1,names:'fff', ages:22},{id:2,names:'aaa', ages:55},{id:1,names:'zzz', ages:44}]
let setobj = obj.some((user)=>{
    console.log(user);
    return user.names=='zzz'
})
console.log(setobj);
//////////////////////////
const nums = [12,45,82,33]
function isnum(num){
    return num<12
}
console.log(nums.some(isnum));   
//////////////////////////////
// 68-Exercise onlline shops

const products = [
{id:1,name:'laptop',price:20000},
{id:1,name:'pc',price:50000},
{id:1,name:'keyoard',price:42000},
{id:1,name:'speaker',price:10000}];
const basckets = [
{id:1,name:'case',price:640000},
{id:1,name:'cabl',price:8000}]
let userproduct = ("enter ur product:")
let requestuser;
const isshop = products.some((product)=>{
    if(product.name==userproduct){
        requestuser=product;
        return true;
    }
})
if(isshop) {
    let newproduct =[{id:products.length +1,name:requestuser.name,price:requestuser.price}]
    basckets.push(newproduct)
    let sum = 0
    basckets.forEach((product)=>{
        sum += product[1].price
        
    })
    console.log(basckets);
    console.log("totals:", + sum);
}else{
    console.log("nothing product...");
}