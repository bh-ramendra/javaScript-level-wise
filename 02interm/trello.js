let mytodos = {
    day: 'monday',
    meeting:0,
    meetdone:0,

}


let addmetting = function (todo , meet = 0) {
    todo.meeting = todo.meeting + meet
}

let meetdone = function (todo , meet = 0) {
    todo.meetdone = todo.meetdone - meet
}

let resetday = function (todo) {
    todo.meeting = 0
    todo.meetdone = 0
}

let getsummaryofday = function (todo) {
    let meetleft =todo.meeting + todo.meetdone
    return `you have ${meetleft} meeting done today`
}

addmetting(mytodos , 4)

// addmetting ( mytodos , 2)
meetdone( mytodos ,5)


console.log(mytodos);

console.log(getsummaryofday(mytodos));
