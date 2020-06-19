// alert('hey')


localStorage.setItem('hero' , 'thor');
// set part
localStorage.setItem('todo' , 'buy ice tea')
var myhero =  localStorage.getItem('hero')
console.log(myhero);
// get part
console.log(localStorage.getItem('todo'));

localStorage.setItem('todo' , 'record youtube video')
console.log(localStorage.getItem('todo'));

localStorage.removeItem('hero')
myhero =  localStorage.getItem('hero')

console.log(myhero);
