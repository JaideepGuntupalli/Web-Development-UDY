const TV_MAZE = "https://api.tvmaze.com/search/shows?q=";
const input = document.querySelector("#search");
const submitBtn = document.querySelector("#searchForm");
const resultDiv = document.querySelector("#newResults");

const inputReader = () => {
    let query = input.value;
    input.value = "";
    return query;
}

const TVShowSearch = async() => {
    try {
        let response = await axios.get(TV_MAZE+inputReader());
        return response.data;
    } catch (error) {
        return "Error encountered" + error;
    }
}

const makeH3 = (name) => {
    const newH3 = document.createElement('h3');
    newH3.innerText = name;
    return newH3;
}

const makeImg = (url) => {
    const newImg = document.createElement('img');
    newImg.src = url;
    return newImg;
}

const makeNewResultDiv = (tvShow) => {
    const newTVShowResult = document.createElement('div');
    newTVShowResult.appendChild(makeH3(tvShow.show.name));
    if(tvShow.show.image != null){
        newTVShowResult.appendChild(makeImg(tvShow.show.image.medium));
    }
    newTVShowResult.innerHTML += tvShow.show.summary;
    resultDiv.appendChild(newTVShowResult);
}

const appendSearchResults = async() => {
    const data = await TVShowSearch();
    for (let index = 0; index < data.length; index++) {
        const tvShow = data[index];
        makeNewResultDiv(tvShow);
    }
}

submitBtn.addEventListener('submit',(e) => {
    e.preventDefault();
    resultDiv.innerHTML = "";
    appendSearchResults();
});

