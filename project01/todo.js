// var h = document.createElement('h1')
// var myvalu = document.createTextNode('hello-world!')

// h.appendChild(myvalu)
// document.querySelector('h1').appendChild(h)


// var valu = 5
// while (val >0) {
//     console.log(val);
//     val--;
    
// }


var ul = document.getElementById('list');
var li;




var addbutton = document.getElementById('add');
addbutton.addEventListener('click', additem);


var removebutton = document.getElementById('remove');
removebutton.addEventListener('click',removeItem )

// var removeEverything = document.getElementById('removeAll');
// removeEverything.addEventListener('click', removeAll)






function additem() {
   var input = document.getElementById('input');
   var item = input.value;
   ul = document.getElementById('list');
   var textnode = document.createTextNode(item)

   if (item === '') {
       return false;
    //    add a p thg and assign a valu of "enter your todo"
   }
   else {
    //    create li
       li = document.createElement('li')
    //    create check box
       var checkbox = document.createElement('input')
       checkbox.type = 'checkbox';
       checkbox.setAttribute('id' , 'check')
    //    create label
      var label = document.createElement("label");
      label.setAttribute('for' , 'item')
    //   optional
    // add thodse all elemnet on web page

    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li , ul.childNodes[0]);


    setTimeout(() => {
    li.className = 'visual';
        
    }, 1);



    input.valu = ''



   }
    
}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
        
    }
    
    
}

// function removeAll() {
//     // li = ul.children
//     for (let index = 0; index < li.length; index++) {
//         ul.removeChild(li[index])
        
//     }
    
    
// }
