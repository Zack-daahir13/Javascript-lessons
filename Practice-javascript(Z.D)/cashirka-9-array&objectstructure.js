//samee array kadib soodaawac 1 kamida array ga
const colors = ['Green', 'Yellow', 'Blue', 'Brown', 'white'];
console.log(colors[0]);

//arrayga kuisticmaal destruct
const color = ['Green', 'Yellow', 'Blue', 'Brown', 'white'];
let [g, y, b, br, w] = color;
console.log(y,b,w)

//arrayga kaisticmaal qayb kamida adoo isticmaalaayo destruct
 const Color = ['Green', 'Yellow', 'Blue', 'Brown', 'white'];
 let [green,yellow,...rest] = Color;  //markaa rabtid in aad isticmaasho qayb kamida arrayga waxaad isticmalees ... rest
 console.log(rest)

//object destrict
const employee ={
    firstname : "cali",
    age :"20",
    dep : "computer science" // dep waxaad u asign gaeesaa deparment
}

let {firstname, age, dep:department} = employee
console.log(firstname)
console.log(department) 


                           //Author Code: Zack daahir