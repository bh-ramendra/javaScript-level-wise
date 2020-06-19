// const day = ['mon' , 'tue' , 'wed' , 'thr' , 'fri' , 'sat']


//   console.log(day[0]);

//   let sayhello = function () {
//    console.log(`greeting massage for user`);
//   }

//   day.forEach(function (days , index) {
//     console.log(`starts with ${index + 1} -- ${days}`);
//    })
 

//    starts with 1 -- mon
// starts with 2 -- tue
// starts with 3 -- wed
// starts with 4 -- thr
// starts with 5 -- fri
// starts with 6 -- sat
// index + 1 shows here increasing number
// *first array should be there itself then index thing should come *
// +1,+2 its your choice 


// const month=['jan' , 'feb' , 'march' , 'april' , 'may' ,'june' ,'july' ,'aug','sept' ,
// 'oct' , 'nov' ,'dec']

// month.forEach(function (month , index) {
//     console.log(`start with ${index + 1} -- ${month}`);
    
// })
// assigment


// 2nd assigment to=do list

// for (let index = day.length -1; index >=0; index--)
// {
//     console.log(day[index]);
// }

// for (let index = day.length -1; index >=0; index--) {
//     console.log(day[index]);
     
    
// }


// const mytodos = []

// mytodos.push('buy bread')
// mytodos.push('record video for youtube')
// mytodos.push('go to the gym')


// mytodos.forEach(function (todo , index) {
//     console.log(`your task no ${index +1} is :${todo}`);
    
// })

const mytodos= []

mytodos.unshift('buy bread')
mytodos.unshift('record video for youtube')
mytodos.unshift('go to the gym')

for (let index = 0; index < mytodos.length; index++) {
   console.log(`your task is ${index+1}: ${mytodos[index]}`);
   
    
}

