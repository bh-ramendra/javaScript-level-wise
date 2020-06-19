const mytodo = ['buy bread' , 'go to gym' , 'record youtube']

// console.log(mytodo[mytodo.indexOf('buy bread')]);
//  log-> mytodo.indexof('buy bread') will give the true false 
// but if you put in sqr bracket it will give in the output

const  newtodo = [{

    title: 'buy bread' , 
    isdone : false,
} , {
    title: 'go to gym',
    isdone : false,
} , {
    title: "record youtube videos",
    isdone: true,

}]

// const index = newtodo.findIndex(function(todo , index){
//     console.log(todo);
    
//     return todo.title === 'go to gym'
// })
// console.log(index);
// method 1 
// const findtodo = function (mytodos , title) {
//     const index = mytodos.findIndex(function (todo , index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })

//     return mytodos[index]
// }

// let printme = findtodo(newtodo , 'go the gym')
// console.log(printme)


 const findtodo = function (mytodos , title) {
     const titlereturned 
 }