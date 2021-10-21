

var resume = {
    email : 'd@a.com',
    password : '12340',
    isVerified : false,
    firstName : 'd',
    lastName : 'm',
    Education : [{
        uni : 'mum',
        passing : 1997,
        degree : 'SSE',
        grade : 'NA',
        marks : 47
    } , {
        uni : 'mum',
        passing : 19979,
        degree : 'HSE',
        grade : 'NA',
        marks : 51
    } , {
        uni : 'mum',
        passing : 2002,
        degree : 'BCOM',
        grade : 'NA',
        marks : 57
    }],
    totalYearsOfExpience : 18 ,
    experience : [
        {
            company : 'ISG',
            FromDate : "13-Oct-2003",
            empType : 1
        },
        {
            company : 'ISG',
            FromDate : "13-Oct-2003",
            empType : EMPTYPE.FULLTIME
        }
    ]

}

const EMPTYPE  = {
    FULLTIME : 1,
    PARTTIME : 2,
    CONTRACT : 3,
    THIRDPARTY : 4

}


//No enums in javascript

console.log(resume);