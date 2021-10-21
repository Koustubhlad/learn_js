var person  = {
    firstName : 'Darshan',
    lastName : 'Marathe',
    DOB : new Date(1982 ,1 ,20 ,9, 30 , 0, 0),
    AdharNo : 10299949494
}

var employee = {
    EmpId: 1,
    ...person
}
var Guest = {
    SeatNo : 20,
    IsCovidVaccinated : true,
    NoOfDoses : 2,
    person
}

var voter = {
    voterId : 1,
    subject : person
}
console.log(employee);
console.log(employee.firstName);
console.log(voter);
console.log(Guest)