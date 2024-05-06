// method map
let score = [4,8,75,12,35]
console.log(score.map((scor)=>{
    return scor * 9;
}));
/////////////////////////////////////
// method filter
let numbers = [ 12,43,76,22,48,90];
function filters(num){
    return num >40
}
console.log(numbers.filter(filters));

///////////////////////////////////
// reduce
let fruits= ['apple','banana','cherry'];

let totalFruit =fruits.reduce((accumulator , currentValue) =>{
   return accumulator + currentValue ;
},"");
console.log("total fruit : " + totalFruit);
//////////////////////////////////////
let number= [11,5,3,3,4,55,2,58,88,4,65,3,3,5];
let maxNum =number.reduce((maxSoFar,currentVal) => {
if(!maxSoFar.includes(currentVal)){
    maxSoFar.push(currentVal)
}
return maxSoFar
},[])
console.log(maxNum);
