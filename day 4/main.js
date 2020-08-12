// -------------------------------------exc1-----------------------
// const calcAge = function(x, y) {
//     return x - y 
// }
// const age = calcAge(2017, 1989)
// console.log(age)

const calcAge = function(x, y) {
    return x - y 
}
const calcAge2 = function(x, y) {
    return x - y - 1
}
const age = calcAge(2017, 1989)
const age2 = calcAge2(2017, 1989)
console.log("You are either " + age + " or " + age2)
