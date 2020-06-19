function myvalidation(params) {
    let myvalu = document.getElementById('myform').value;

if (isNaN(myvalu) || myvalu < 1 || myvalu > 20) {
    console.log('not a valid input');
    
} else {
    console.log('this input is okk');
    
}

}

// form validation
document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = ''
    event.target.realname.value = ''

    
})