var order = {
    symbol : "#",
    quantity : 10,
}
var breakup = {
    valve : 40,
    price : 108,
    date : "15-10-2021"
}
var holding = {
    symbol : "#",
    breakups : [breakup], //Array of breckup
}
var client = {
    PANNo : 4212,
    firstname :"koustubh",
    lastname : "lad",
    adharcardno : 1234,
    DOB : "06-11-1998",
    holdings : [holding , {symbol : 'ITC' , breakups : [ { value : 10 ,price : 241 , date : new Date()}]}], //Array of holding
    orders : [order], //array of order
    username : "ko",
    mobileno : 8007791187,
    margin : 50,
}
console.log(client);