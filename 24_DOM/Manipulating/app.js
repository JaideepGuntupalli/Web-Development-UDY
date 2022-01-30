const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// document.querySelector('p').innerText = 'Hello mom! I just hacked this website'


// The url you need: 'https://devsprouthosting.com/images/chicken.jpg'

const img = document.querySelector('img');

img.setAttribute('src',"https://devsprouthosting.com/images/chicken.jpg");

const h1 = document.querySelector('h1');

h1.style.textAlign = 'center';