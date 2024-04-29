const obj ={
    a:1,
    b:function(){
        console.log(this.a);
    }

}
const func =obj.b;
func();
////////////////////////////

const calctip = function(bill){
return bill>=50 && bill<=300?bill*0.15:bill*0.2
}
const bills = [1990,1997,1980,2003,1994];
const tips =[];
const total=[];
for(let i = 0; i < bills.length; i++){
    const tip = calctip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i])
}
console.log(bills,tips,total);
////////////////////////////

const aveage = function(arr){
    let sum = 0;
    for(let z = 0 ; z<arr.length ; z++){

        sum+=arr[z]
    }
    return sum/arr.length;

}
console.log(aveage[2,3,5]);
console.log(aveage(tips));
console.log(aveage(total));
console.log(aveage(bills));
////////////////////////////
