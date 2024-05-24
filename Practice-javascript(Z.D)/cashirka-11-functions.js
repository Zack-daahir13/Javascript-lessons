//qaabka 1aad ee function loosameey
function getAge(){
    console.log(20);
}
getAge();

console.log("-------------------------------------")

//qaabka 2aad ee function loosameey
getName('maryan')  //qaabkaan waxaa looyaqaanaa hoisting
function getName(name){      //markaani waxaa ladhahaa parameter
    console.log (name);
}
getName('zaki')   //markaanina argument ayaa siineesaa
getName('maxamed')

console.log("-------------------------------------")

//qaabka 3aad ee function loosameey
let futureAge=20;
function myAge(age=0){
    console.log(age + futureAge)
}
myAge(20)

console.log("-------------------------------------")

//qaabka 4aad ee function badan loosameey
function add(n1=0, n2=0){
    console.log(n1+n2)
}
add(5,5)
add(3)

console.log("-------------------------------------")

//qaabka 5aad function sida array loogu dhigo
function ADD(...numbers){
    console.log(numbers)
}
ADD(1,2,3);

console.log("-------------------------------------")

//qaabka 6aad ee function sida for loop loogu sameeyo
function addition(...numbers){
    let sum =0;
        for( n of numbers){
            sum+=n
        }
    console.log(sum)
}
addition(10,9,20,50,100);


console.log("-------------------------------------")

//qaabka function loogu badalo function expression
let power = function(n1,n2){
    console.log(n1**n2);
}
power(5,3)


console.log("-------------------------------------")

//qaabka 8aad arrow functions
let POWER =(n1,n2) =>n1**n2;
console.log(POWER(2,3));

console.log("-------------------------------------")

//qaabka 9aad anonymous function

(function(x="asc"){
    console.log("");
})();


                      //Author Code: Zack daahir