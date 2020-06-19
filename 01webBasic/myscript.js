// console.log(document.head);


// documen js mdn


// alert('here am ')

// console.log(document.getElementById('idone'));

// console.log(document.getElementsByClassName(''));

// const myelement = document.querySelectorAll('p')
// console.log(myelement[2]);


// const mypelement = document.querySelector('p')

// mypelement.textContent = 'i am beeing change using js'

const mypelement = document.querySelectorAll('p')

mypelement.forEach ((p) => p.textContent = 'i am changed using loop in js')


const mynewpara = document.createElement('p')

mynewpara.textContent = 'i was add via js'

document.querySelector('body').appendChild(mynewpara)


document.querySelector('button').addEventListener('click', (event) => {
event.target.textContent = 'i was clicked';    
})

// track input form 

document.querySelector('#myform').addEventListener('input' , (event) => {
    console.log(event.target.value);
    
})