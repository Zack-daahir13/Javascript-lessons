//array method: for each, map, filter, find, reduce
let employee = [
    {NAME:'zack', age:"20", gender: 'male', salary:'1000', department:'HR' },
    {NAME:'naciimo', age:"25", gender: 'male', salary:'800', department:'designer' },
    {NAME:'maxamed', age:"27", gender: 'male', salary:'700', department:'developer' },
    {NAME:'nasteexo', age:"19", gender: 'female', salary:'300', department:'dantist' },
    {NAME:'faadumo', age:"22", gender: 'female', salary:'400', department:'salon' }
]
console.log(employee)
console.log(employee[0].NAME) //hal kamida array ga uyeer kaliya adoo wacayo name kiisa
console.log(employee.length) // dhirirka array ga soo bandhig

//loop kuisicmaal arrayga for each
employee.forEach(function(em) {
    console.log(em.department)
});

//loop kuisicmaal arrayga adoo fuctionka map isticmaalayo 
employee.map(function(em, index) {
    console.log(em.gender +" "+  index)
});

//loop kuisicmaal arrayga adoo fuctionka filter isticmaalayo 
employee.filter(function(em) {
    console.log( em.gender ==="female");
})


//loop kuisicmaal arrayga adoo fuctionka find isticmaalayo 
let em = employee.find(function(em) {
    return em.salary > 500;
})
console.log(em.salary)


//loop kuisicmaal arrayga adoo fuctionka reduce isticmaalayo 
employee.reduce(function(acc, value) {
    console.log( value.salary);
})


//callback
function findByName(emp, index){
    return emp.department ==="HR";
}

let emp =employee.find(findByName);
console.log(emp.department)


                               //Author Code: Zack daahir