/* const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length - 1);

console.clear();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}
// forEach 함수는 array 함수를 보통 호출하진 않는다!!!!
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
});
// c. forEach
fruits.forEach((fruits, index) => console.log(fruits, index));
fruits.forEach((fruits) => console.log(fruits));
// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);
// add an item to the begining
fruits.unshift("🍓", "🍋");
console.log(fruits); */

/* // shift: remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits);
// note!! shift, unshift ar slower than pop, push
// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits);
// combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🍉"));
console.log(fruits.indexOf("🥥"));

// includes
console.log(fruits.includes("🍉"));
console.log(fruits.includes("🥥"));

// lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎")); */

// Q1. make a string out of an array
{
    const fruits = ["apple", "banana", "orange"];
    /*  const results = fruits.join("구분자 넣기");*/
    const results = fruits.join(`, and `);
    console.log(results);
}
// Q2. make an array out of a string
{
    const fruits = "🍎,🥝,🍌,🍒";
    const results1 = fruits.split(",");
    const results2 = fruits.split(",", 3);
    console.log(results1);
    console.log(results2);
}
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    // 배열 자체의 값을 변환하고 반환된 값도 값을 변환을 한다.
    const result = array.reverse();
    console.log(result);
    console.log(array);
}
// Q4 make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result2 = array.slice(2, 5);
    console.log(result2);
    console.log(array);
    // splice는 배열 자체를 수정 slice는 배열에서 원하는 부분만 리턴해서 받아오고 싶을 때 사용
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrlled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, false, 80),
    new Student("C", 30, true, 90),
    new Student("D", 40, false, 66),
    new Student("E", 18, true, 88),
];
// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolleld students
{
    const result = students.filter((student) => student.enrlled === true);
    console.log(result);
}
// Q7.make an array containing only the students' scores
// result sould be: [45, 80, 90, 66, 88]
{
    const result = students.map(function (student) {
        return student.score * 3;
    });
    console.log(result);
}
// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}
// Q10. make a string containing all the scores result should be: "45, 80, 90, 66, 88"
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}
// Bonus! do Q10 sorted in ascending order result should be: "45, 66, 80, 88, 90"
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => b - a)
        .join();
    console.log(result);
}

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// 개인 과제 part ond: OPEN API를 사용하여 moive 검색하기
// function openClose() {
//     $("#postingBox").toggle();
// }
// function makeCard() {
//     let image = $("#image").val();
//     let title = $("#title").val();
//     let coment = $("#coment").val();
//     let star = $("#star").val();

//     let temp_html = `<div class="col">
// 	<div class="card">
// 	  <img
// 		src="${image}"
// 		class="card-img-top"
// 		alt="..."
// 	  />
// 	  <div class="card-body">
// 		<h5 class="card-title">${title}</h5>
// 		<p class="card-text">${star}</p>
// 		<p class="card-text">${coment}</p>
// 	  </div>
// 	</div>
//   </div>`;
//     document.body.querySelector("mycards").append(temp_html);
// }

// let search = u.results.original_title.value.toLowerCase();
// let listInner = document.getElementsByClassName("listInner");
// let listInner = u.results;

// for (let i = 0; i < listInner.length; i++) {
//     city = listInner[i].getElementsByClassName("city");
//     country = listInner[i].getElementsByClassName("country");
//     if (
//         city[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
//         country[0].innerHTML.toLowerCase().indexOf(search) != -1
//     ) {
//         listInner[i].style.display = "flex";
//     } else {
//         listInner[i].style.display = "none";
//     }
// }

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
// post("jsonplaceholder.typicode.com", "posts", {})
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

let totallFunc = await post();
let movieArray = Array.from(totallFunc.results);

// let newMovieArray = Object.entries(movieArray);
// console.log(movieArray);
// console.log(Object.entries(movieArray));
// vote_average;
// let imgPath = movieArray.backdrop_path;
// const imgBaseSize = "https://image.tmdb.org/t/p/w500";
// console.log(movieArray);

movieArray.forEach((num) => {
    let newtitle = num.title;
    let newOverview = num.overview;
    let imgPath = num.poster_path;
    let voteAver = num.vote_average;
    const imgBaseSize = "https://image.tmdb.org/t/p/w500";
    // console.log(newOverview);
    let img = imgBaseSize + imgPath;
    // document.createElement("img");
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

    // console.log(createDiv);
    // console.log(createDiv);
    // card.append(createImg);
    // console.log(createDiv);
    // const x = document.querySelector(".imgTitle");
});

// const button = document.querySelector(".button");
// function filter() {
//     let value, name, item, i;

//     value = document.querySelector(".searchInput").value.toUpperCase();
//     item = document.querySelectorAll(".search");
//     console.log(value);
//     console.log(item);

//     for (i = 0; i < item.length; i++) {
//         name = item[i].querySelector("carDiv");
//         console.log(name);
//         if (name.innerHTML.toUpperCase().indexOf(value) > -1) {
//             item[i].style.display = "column";
//         } else {
//             item[i].style.display = "none";
//         }
//     }
// }
// button.addEventListener("click", filter);

const button = document.querySelector(".button");
function filter() {
    let value, name, item, i;

    value = document.querySelector(".searchInput").value.toUpperCase();
    item = document.querySelectorAll(".cardDiv");
    // console.log(value);
    // console.log(item);
    for (i = 0; i < item.length; i++) {
        console.log(`${i} => ${item[i]}`);
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

// movieArray.forEach((num) => {
//     let newtitle = num.title;
//     let newOverview = num.overview;
//     let imgPath = num.poster_path;
//     const imgBaseSize = "https://image.tmdb.org/t/p/w500";
//     // console.log(newOverview);
//     let img = imgBaseSize + imgPath;
//     // document.createElement("img");
//     const createDiv = document.createElement("div");
//     const createImg = document.createElement("img");
//     const card = document.querySelector(".imgPoster");
//     createImg.className = "mi";
//     createImg.setAttribute("src", img);
//     // createTitle.innerText = `영화제목: ${newtitle}`;
//     // createDiv.append(createImg);
//     card.append(createImg);
//     // card.append(createImg);
//     // card.append(createDiv);
//     // console.log(createDiv);

//     // const x = document.querySelector(".imgTitle");

//     // img
// });

// console.log(movieArray.length);

// movie.sayHello();

// let toallArr = totallFunc.map((moiveCollector) => moiveCollector.results);

// console.log(toallArr);

// let a = Array.from(u.results.key);

// console.log(`${a}`);

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// let elementsArray = [...a];

// elementsArray.filter((element) => element.classList.contains('on'));

// var nodes = document.querySelectorAll('div');
// var els = document.body.children; // HTMLCollection [noscript, link, div, script, ...]
// Array.from(nodes).forEach(function(el) { console.log(el) });

// u.results.forEach((temp_html) => {
//     let temp_html = `<div class="col">
// 	<div class="card">
// 	  <img
// 		src="${image}"
// 		class="card-img-top"
// 		alt="..."
// 	  />
// 	  <div class="card-body">
// 		<h5 class="card-title">${title}</h5>
// 		<p class="card-text">${star}</p>
// 		<p class="card-text">${coment}</p>
// 	  </div>
// 	</div>
//   </div>`;
//     document.body.querySelector("mycards").append(temp_html);
// });

// let mT = u.results[0].id;

// const mI = `https://image.tmdb.org/t/p/w500/`;
// let poster = u.results[0].poster_path;

// document.querySelector(".movieTitle").children[0].innerText = `영화제목: ${mI}`;

// console.log(`${u.results[0].original_title.val()}`);
