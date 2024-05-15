// getter , setter
interface Iuser{
    id:number
    fristname:string,
    lastame:string,
    age:number 
    nationalcode:string |null
}
class Auser implements Iuser{
public id:number = 1
public fristname: string = "zara"
public lastame: string ="st"
public age:number = 20
private nationalID:string|null = null

get nationalcode():string |null{
    return "your id:" + this.nationalID
}
set nationalcode(value:string|null){
    if(value){
        this.nationalID = value
    }
}
}
const users = new Auser();
users.nationalcode = "2346546546"
console.log(users.nationalcode);

// ///////////////////////////////////////
// Exercise getter,setter 

class Rectangel{
    private _width:number
    private _height:number
    constructor(width:number,height:number){
        this._width = width
        this._height = height
    }
    get width():number{
      return this._width
    }
    set width(value:number){
        if(value>0){
            this._width = value
        }else{
            console.log("erros");
        }
    }
    get height():number{
        return this._height
    }
    set height(value:number){
        if(value>0){
            this._height = value
        }else{
            console.log("errors ");
        }
    }
    get perimiter():number{
        return 2*(this._width + this._height)
    }
    get area():number{{
        return this._width * this._height
    }
}
}
const rectangle = new Rectangel(14,5)
console.log(rectangle.area);
rectangle.width = 40
console.log(rectangle.perimiter);

rectangle.height = -1
