// 78 Exercise =========> left-right✅ ===>gig-kak

let world =["gig","mam","dad"];
function checkworld(arr){
    const reversed = arr.slice().reverse().join('');
  return arr.join('') === reversed;
}
console.log(checkworld(world) ? "left-to right✅":"let to right❌");
/////////////////////////////////////////
