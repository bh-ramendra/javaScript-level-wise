let useremail = 'abc123asv'

let password = '12345678'

let userchecker = function (mystring) {
    if ((mystring.includes(123)) && (mystring.length >=6 )) {  

          return true;
    }
    
        return false
    
}
console.log(userchecker(useremail));


// visit mdn javascript documentation
// visit regular expression on youtube

let passchecker = function (pass) {
    if ((pass.includes(123)) && pass.length> 5) {
        return true
    }
    return false
}
console.log(passchecker(password));
