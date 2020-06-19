class User{
    constructor(fristname, lastname , credit){
this.fristname = fristname
this.lastname = lastname
// this.middlename = this.middlename
this.credit = credit
    }


 getFullName(){
     let fullname = `${this.fristname}   ${this.lastname} is my full name`;
     return fullname
    //  
 }
 editname(newname){
     const myname = newname.split(' ')
     this.fristname = myname[0]
    //  this.middlename = myname[1]
     this.lastname = myname[1]
    //  take a middle name too
 }
}

class Teacher extends User {
    constructor(fristname, lastname , credit , subject){

        super(fristname, lastname , credit)
        this.subject = subject
    }
    getFullName(){
        let fullname = `${this.fristname} ${this.lastname} is my full name! and i teach ${this.subject}`;
     return fullname;

    }
}





const john= new User('john' , 'anderson' , 34 , 'python')
console.log(john);
console.log(john.getFullName());
john.editname('jonny  anderson')
console.log(john.getFullName());



// const sammy = new User();
// console.log(sammy);


