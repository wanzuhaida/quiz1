//Exercise string and number
let data1 = true
let data2 = "1.25"
console.log(data1, typeof data1)
console.log(data2, typeof data2)
//console.log.(data1, typeof data1)
//console.log.(data2, typeof data2)

let data3 = data1.toString() + (data2)
console.log(data3, typeof data3)
//console.log(data3, typeof data3)

//array
let data = ["one", 2 , true]
console.log(data[2] , typeof data [2])

//object
let user = {
    name: "wanzu",
    faculty: "fkekk",
    phone: "0168304131",
    email: "wanzu@utem.edu.my"
}
console.log( user.name)
//console.log( user.name)
user = {
    name: "wanzu",
    faculty: "fkekk",
    phone:{
        office: "0168304131",
        mobile: "0123456789"
    },
    email: "wanzu@utem.edu.my"
}
console.log( user.phone.mobile)
console.log( user.phone.home)
