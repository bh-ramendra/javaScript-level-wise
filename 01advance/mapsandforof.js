var john = {
    name: 'i am john',
    age : 24,
    isactive :true
}

var marry = {
    name: 'i am marry',
    age: 23,
    isactive:true
}

var sam = {
    name: ' i am sam',
    age: 29,
    isactive:false
}

let users = new Map()

users.set('john', john )
users.set('marry', marry )
users.set('sam', sam )

// console.log(users.size);

// console.log(users.get('sam'));

// console.log(users.values());

for (const values of users.values()) {
    // console.log(values.name);
    
}

for (const [key, value] of users.entries()) {
    // console.log(key + '=' + value.name);
    
}


// users.forEach((value, key) =>console.log(key + '=' + value.name))


var arrofArr = [['one' , '1'], ['two' , '2'],['three' , '3']]

var newmap = new Map(arrofArr)
 console.log(newmap);
 