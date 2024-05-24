//qaabka for loop loosameeyo
for (let i = 0; i<=10; i+=1){
    console.log(i);
}

//qaabka data kala duwan loop loosameeyo

data = ["abdi", "cali", 121, true];
console.log(data);
console.log(data[0]); //kan koowaad bis uyeer
console.log(data[3]);  //kan udanbeeyo uyeer
console.log("----------------------------------------------")
//loop kusamee data kore
for (let n = 0; n<data.length; n+=1){   
    console.log(data[n]);
}
console.log("----------------------------------------------")
//qaabka labaad ee for loop loogu sameeyo
for (let d of data){
    console.log(d)
}

console.log("----------------------------------------------")
//qaabka for loop loogu sameeyo object
let person = {
    NAME: "sakariye",
    phone: 612676637,
    age: 20,
}

for(let p in person){
    console.log(person[p])
}


                       //Author Code: Zack daahir