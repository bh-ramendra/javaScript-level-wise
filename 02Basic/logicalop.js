let isverified = true
let isloggedin = true
let haspayment = true
let isguest = true

if (!isverified && isloggedin && haspayment) {
    console.log("greting meet to user")
    console.log('grant acess to paid content')
}
else if (isverified || isguest) {
    console.log('allow free preview')
}
else{
    console.log('MESSSGE: please contact admin')
}
