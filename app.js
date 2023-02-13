const form = document.querySelector("#searchForm");
const resContainer = document.querySelector("#results");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let allImg = document.querySelectorAll('img')
    for (let img of allImg) {
        img.remove()
    };
    let tvShow = document.querySelector("#query");
    const config = { params: { q: tvShow.value } }
    let res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    displayResults(res.data);
    tvShow.value = "";
});

const displayResults = (data) => {
    for (let result of data) {
        let newImgSoure = result.show.image.medium;
        if (newImgSoure) {
            let newImg = document.createElement("img");
            newImg.setAttribute("src", newImgSoure);
            newImg.setAttribute("alt", "TV Show Pic");
            resContainer.append(newImg);
        }
    }
};
