// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESPONSE", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("Data Parsed...",data)
//         console.log("Name:",data.name)
//     })
//     .catch(e => {
//         console.log("Error",e)
//     })    

const starwarsPeople = async () => {
    try {
        let response = await fetch("https://swapi.dev/api/people/1/");
        let jsonResponse = await response.json();
        return jsonResponse.name;
    } catch (error) {
        
    }
}
 const result = async () => {
    console.log(await starwarsPeople());
 }