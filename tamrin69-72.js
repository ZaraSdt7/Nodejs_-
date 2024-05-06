// Method-every
const ages = [22,68,21,30,32]
const isage = ages.every((ege)=>{
    return ege > 15
})
console.log(isage);
//////////////////////////
//Exercise
const getuser=[{id:1, name:'zzz',age:20},{id:2,name:'ali',age:17},{id:3,name:'reza',age:22},{id:4,name:'aras',age:23}]
const istrue = getuser.every((use)=>{
    return use.age > 15
})
if(istrue){
    console.log("meet is now");
}else{
    console.log("meet is failed");
}
/////////////////////////////////
// Array splice()
let fruits = ["apple","banana","orange"];
fruits.splice(1,1,"grape")
console.log(fruits);
///////////////////////////////////////
// Exercise findindex

const users = ['user1','user2','user3','user4'];
const userIndex=users.findIndex((user) => {
    return user === 'user3';
});
console.log(`The index of "user3" is ${userIndex}`);
