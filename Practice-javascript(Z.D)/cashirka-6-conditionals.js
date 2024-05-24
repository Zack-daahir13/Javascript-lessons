//conditionals
let isFree = false;
let logged = true;
if (isFree){
    console.log("the course is free")
}else if (!isFree & logged) {
    console.log("watch the premium course")
}else{
    console.log("please registred and login")
}
console.log("---------------------------------------------")


//ternery opperator
isFree
? console.log("the course is free")
: !isFree & logged  
? console.log("watch the premium course")
: console.log("please registred and login")
console.log("---------------------------------------------")

//case
let number = 2;
switch(number){
    case 1:
        case 2:
            console.log("one or two");
            break 
            case 3:
                console.log("three")
                break
                default:
                    console.log("lambar kale")
                    break
}                
console.log("---------------------------------------------")

//case
isFree =true;
loged =true;
switch(isFree){
    case true:
        console.log("course ka waa free ee daawo")
        break
    case false:
        console.log("fadlan iska diwan geli courseka")
        break
    default:
        console.log("cilad baa jirta")
}

                  //Author Code: Zack daahir