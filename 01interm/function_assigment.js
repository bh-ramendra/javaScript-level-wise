let getmygrade = function (currentmarks , totalmarks) {
    let mypercentage =(currentmarks/totalmarks)*100


    let grade = ''

    if (mypercentage>=90) {
        grade ='A'
    }
    else if (mypercentage>=80) {
        grade = 'B'
    }
    else if (mypercentage>=70) {
        grade = 'C'
    }
    else if (mypercentage>=60) {
        grade = 'D'
    }
    else {
        grade = 'F'
    }

    return `your grade is ${grade} and percentage is ${mypercentage}`
}

let yourresult = getmygrade(92 , 150)
console.log(yourresult);
