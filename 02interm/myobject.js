let myyoutubevideoone = {
    title: 'loops in javascript',
    videolength : 15,
    videocreator: 'ramendra',
    discription : 'this is a video description and a long one',
}

let myyoutubevideotwo = {
    title: 'function in javascript',
    videolength : 10,
    videocreator: 'ramendra',
    discription : 'this is a video description and a long one',
}
//  console.log(myyoutubevideo);

// console.log(`hey new video on ${myyoutubevideo.title} by an ${myyoutubevideo.videocreator} `);

// myyoutubevideo.title = 'for each loop in js'
// console.log(`hey new video on ${myyoutubevideo.title} by an ${myyoutubevideo.videocreator} `);
// working with object this thing should be **take care of it
// once if you change your object the whole thing will change




// assigment

// name 
// price 
// discription

// let mycompany = {
//     name : 'bharadwaj group',
//     price : '100',
//     discription: 'bharadwaj group of industries',
// }

// console.log(`hey my new company ${mycompany.name} has networth of ${mycompany.price}`);
// console.log(`${mycompany.discription}`);

// object is use while for call the API's and working on the firebase
// acess


let changevideolength = function (myobject) {
    return {
        formateone :`time of this video is:${myobject.videolength + 2}`,
        formatetwo: `time of this video is:${myobject.videolength + 1}`
    }
      
}
let addone = changevideolength(myyoutubevideotwo)
console.log(addone.formateone);
console.log(addone.formatetwo);


