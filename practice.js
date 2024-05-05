//switch-case
let avarage ="11";
switch(avarage){
    case "20":
        case "19":
            case "18":
                console.log("Level A")
                break;
                case "17":
                    case "16":
                        case "15":
                            console.log("Level B")
                            break;
                            case "14":
                                case "13":
                                    case "12":
                                        console.log("Level C")
                                        break;
                                        default:
                                            console.log("Level fired")
}
////////////////////////////////////////////////////////////////

let captcha = Math.floor(Math.random()*10000 + 90000)
console.log(captcha);
////////////////////////////////////////////////////////////////
// forEach

const users = ['zara','ali','fateme','juan'];
users.forEach((user)=>{
    console.log(user);
});
//////////////////////////////////////////////////////////
let username=[{ id:1,name:'zara',family:'st', age:29},{id:2,name:'ali',family:'st', age:27},
{id:3,name:'fatemeh',family:'dd', age:32}]
username.forEach(function(usernames){
    console.log('ids:', +  usernames.id +  "name:" + usernames.name  + 'family:' + usernames.family  +  'age:' + usernames.age);
})