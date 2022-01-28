// const allImages = document.getElementsByTagName('img');

// for(let img of allImages){
    // console.log(img.src);
    // img.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
// }

// const allSquareImages = document.getElementsByClassName('square');

// for(let img of allSquareImages){
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
// }

const links = document.querySelectorAll('p a');

for ( let link of links){
    const linkTitle = link.innerHTML;
    link.href = `https://www.google.com/search?q=${linkTitle}`;
}