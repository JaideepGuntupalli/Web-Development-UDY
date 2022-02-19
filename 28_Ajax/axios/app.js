// axios.get("https://swapi.dev/api/people/1/")
//     .then (res => {
//         console.log(res);
//     })

// const starwars = async() => {
//     try {
//         const res = await axios.get("https://swapi.dev/api/people/1/");
//         console.log(res.data.name);
//     } catch (error) {
//         console.log(error);
//     }
// }

const DAD_JOKES = "https://icanhazdadjoke.com/";
const doc = document.querySelector("body")

const newDadJoke = async() => {
    try {
        const header = {headers:{Accept: 'application/json'}};
        const res = await axios.get(DAD_JOKES,header);
        const paragraph = document.createElement("p");
        paragraph.innerText = `New Dad J😂ke: ${res.data.joke}`
        doc.appendChild(paragraph);
        console.log("New Dad J😂ke: ", res.data.joke);
    } catch (error) {
        console.log(error);
    }
}

let intervalId = window.setInterval(function(){
    newDadJoke()
  }, 2000);
  
