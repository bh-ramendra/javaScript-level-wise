// let mytodos = {
//     day: 'monday',
//     meeting:0,
//     meetdone:0,
//     // methods or function
//      addmetting: function() {
//          console.log(this);
         
//      }


// }
// let mytodostwo = {
//     day: 'tuesday',
//     meeting:12,
//     meetdone:3,
//     // methods or function
//      addmetting: function(num) {
//          this.meetings = this.meetings +num

//      },
// summary:function () {
//     return `you have ${this.meetings} meetings today`
// }

// }


// mytodos.addmetting(4)

// console.log(mytodostwo.summary());

// assigment
// meeting done 
// crete a functin that can reset entire day

let mytodos = {
    day: 'monday',
    meeting:0,
    meetdone:10,
    // methods or function
     addmeetdone: function(num) {
         this.meetdone= this.meetdone - num
         
     },


     resetday: function () {
         this.meetdone = 0
     },

     summary: function () {
         return `today you have done ${this.meetdone} meetings`
     }


    }
    mytodos.addmeetdone(15)
    console.log(mytodos.summary());
    
    
    