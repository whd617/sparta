async function post() {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1/`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkzNzRjY2EyNTc1NjM4ZDEwMDk3NzAzYjFhODliYSIsInN1YiI6IjY1MmZiZWRkYTgwMjM2MDBmZDJkOWY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ga70Ew8jOvgDuOUzMiuJgfI8GjGGypablmY74WjMtUs",
        },
    };

    const res = await fetch(url, options);
    const data = res.json();
    if (res.ok) {
        return data;
    } else {
        throw Error(data);
    }
}

let totallFunc = await post();
let movieArray = Array.from(totallFunc.results);

movieArray.forEach((num) => {
    let newtitle = num.title;
    let newOverview = num.overview;
    let imgPath = num.poster_path;
    let voteAver = num.vote_average;
    const imgBaseSize = "https://image.tmdb.org/t/p/w500";
    let img = imgBaseSize + imgPath;
    const createDiv = document.createElement("div");
    const createImg = document.createElement("img");
    const card = document.querySelector(".imgPoster");
    const createTitle = document.createElement("h3");
    const createOverview = document.createElement("p");
    const createVoteAverage = document.createElement("h4");

    createDiv.className = "cardDiv";
    createImg.className = "mi";
    createImg.setAttribute("src", img);
    createTitle.innerText = `영화제목: ${newtitle}`;
    createTitle.className = "search";
    createOverview.innerText = `영화소개 : ${newOverview}`;
    createVoteAverage.innerText = `영화평점 : ${voteAver}`;

    createDiv.append(createImg);
    createDiv.append(createTitle);
    createDiv.append(createOverview);
    createDiv.append(createVoteAverage);
    card.append(createDiv);
});

const button = document.querySelector(".button");
function filter() {
    let value, name, item, i;

    value = document.querySelector(".searchInput").value.toUpperCase();
    item = document.querySelectorAll(".cardDiv");
    // console.log(value);
    // console.log(item);
    for (i = 0; i < item.length; i++) {
        // console.log(`${i} => ${item[i]}`);
        // console.log(item[i]);
        name = item[i].childNodes[1].innerText;
        // console.log(name);
        if (name.toUpperCase().indexOf(value) > -1) {
            item[i].style.display = "column";
        } else {
            item[i].style.display = "none";
        }
    }
}
button.addEventListener("click", filter);
