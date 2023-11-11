// function getUser(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 const user = userId === 1 ? { id: userId, name: "GYMCODING" } : null;
//                 // callback user
//                 resolve(user);
//             } catch (error) {
//                 reject(error);
//             }
//         }, 1000);
//     });
// }

// // 비동기 처리
// function runPromise() {
//     getUser(0).then((user) => {
//         if (user) {
//             console.log("user: ", user);
//         } else {
//             console.log("유저가 없어요!");
//         }
//     });
// }

// // async await은 비동기 작업을 처리할 때 사용
// async function runAsyncAwait() {
//     const user = await getUser(0);
//     if (user) {
//         console.log("user: ", user);
//     } else {
//         console.log("유저가 없어요!");
//     }
// }

// // runPromise();
// runAsyncAwait();

/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
// 여기서 부터 진짜 공부할 내용 위 내용 무시!!!!
// OPEN API

// const options = {
//     method: "GET",
//     headers: {
//         accept: "application/json",
//         Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkzNzRjY2EyNTc1NjM4ZDEwMDk3NzAzYjFhODliYSIsInN1YiI6IjY1MmZiZWRkYTgwMjM2MDBmZDJkOWY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ga70Ew8jOvgDuOUzMiuJgfI8GjGGypablmY74WjMtUs",
//     },
// };

// fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------- */
// async await 키워드를 이용하여 HTTP 방식별로 비동기 함수를 작성하고 모듈화하여 사용
// async function post(body = {}) {
//     const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
//     const options = {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkzNzRjY2EyNTc1NjM4ZDEwMDk3NzAzYjFhODliYSIsInN1YiI6IjY1MmZiZWRkYTgwMjM2MDBmZDJkOWY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ga70Ew8jOvgDuOUzMiuJgfI8GjGGypablmY74WjMtUs",
//         },
//         // body: JSON.stringify(body),
//     };
//     const res = await fetch(url, options);
//     const data = await res.json();
//     if (res.ok) {
//         return data;
//     } else {
//         throw Error(data);
//     }
// }

// post("jsonplaceholder.typicode.com", "posts", {
// title: "Test",
// body: "I am testing!",
// userId: 1,
// })
// .then((data) => console.log(data))
// .catch((error) => console.log(error));
// .then((response) => response.json())
// .then((response) => console.log(response))
// .catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------- */

// function filter() {
//     let search = document.getElementById("search").value.toLowerCase();
//     let listInner = document.getElementsByClassName("listInner");
//     console.log("city");
//     for (let i = 0; i < listInner.length; i++) {
//         city = listInner[i].getElementsByClassName("city");
//         country = listInner[i].getElementsByClassName("country");
//         if (
//             city[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
//             country[0].innerHTML.toLowerCase().indexOf(search) != -1
//         ) {
//             listInner[i].style.display = "column";
//         } else {
//             listInner[i].style.display = "none";
//         }
//     }
// }

/* ---------------------------------------------------------------------------------------------- */

// function fetchAuthorName(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         .then((response) => response.json())
//         .then((post) => post.userId)
//         .then((userId) => {
//             return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//                 .then((response) => response.json())
//                 .then((user) => user1.name);
//         });
// }

// fetchAuthorName(1).then((name) => console.log("name:", name));

/* ---------------------------------------------------------------------------------------------- */

// async function fetchAuthorName(postId) {
//     const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const post = await postResponse.json();
//     const userId = post.userId;
//     const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     const user = await userResponse.json();
//     return user.name;
// }

// fetchAuthorName(1).then((name) => console.log("name:", name));

/* ---------------------------------------------------------------------------------------------- */

// async function fetchAuthorName(postId) {
//     const options = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1${postId}`);
//     const post = await options.json();
//     const filmId = post.Id;
//     const userResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1${filmId}`);
//     const user = await userResponse.json();
//     return user.name;
// }

// fetchAuthorName(1).then((name) => console.log("name:", name));
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */

// 일단 완성본
// TODO: promise 객체 변환이해!!!!!
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
    // fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options).then((response) =>
    //     response.json()
    // );

    const res = await fetch(url, options);
    const data = res.json();
    if (res.ok) {
        return data;
    } else {
        throw Error(data);
    }
}
post("jsonplaceholder.typicode.com", "posts", {})
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

// post().then((data) => console.log("영화_id는:", data.results[0].id));

const u = await post();

document.querySelector(".movieTitle").children[0].innerText = `영화제목: ${u.results[0].original_title}`;
document.querySelector(".movieTitle").children[0].innerText = `영화제목: ${u.results[0].original_title}`;

/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */

// 참고자료 : https://www.daleseo.com/js-window-fetch/

// let a = post(1).then((data) => {});

// console.log(`result 항목 => ${a.results}`);
// post().results;
// console.log(`사람입니다.${post().results}`);

// console.log(`제대로 작동하고 있나?${a}`);

// console.log(a[2]);

/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */

// async function post(postId) {
//     const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1/${postId}`;
//     const options = {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkzNzRjY2EyNTc1NjM4ZDEwMDk3NzAzYjFhODliYSIsInN1YiI6IjY1MmZiZWRkYTgwMjM2MDBmZDJkOWY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ga70Ew8jOvgDuOUzMiuJgfI8GjGGypablmY74WjMtUs",
//         },
//     };
//     const res = await fetch(url, options);
//     const data = await res.json();
//     if (res.ok) {
//         return data;
//     } else {
//         throw Error(data);
//     }
// }
// post("jsonplaceholder.typicode.com", "posts", {})
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */

// async function fetchAuthorName(postId) {
//     const postResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1/${postId}`);
//     const post = await postResponse.json();
//     const options = {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkzNzRjY2EyNTc1NjM4ZDEwMDk3NzAzYjFhODliYSIsInN1YiI6IjY1MmZiZWRkYTgwMjM2MDBmZDJkOWY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ga70Ew8jOvgDuOUzMiuJgfI8GjGGypablmY74WjMtUs",
//         },
//     };
//     const res = await fetch(url, options);
//     const data = await res.json();

//     try {
//         const userResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1/${data}`);
//         const data = await userResponse.json();
//         return data;
//     } catch (err) {
//         console.log("Faile to fetch user:", err);
//         return "Unknown";
//     }
// }

// fetchAuthorName(1).then((user) => console.log("name:", user));

/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------- */

// post("jsonplaceholder.typicode.com", "posts", {})
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

// async function post(postId) {
//     const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1/${postId}`;
//     const options = {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkzNzRjY2EyNTc1NjM4ZDEwMDk3NzAzYjFhODliYSIsInN1YiI6IjY1MmZiZWRkYTgwMjM2MDBmZDJkOWY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ga70Ew8jOvgDuOUzMiuJgfI8GjGGypablmY74WjMtUs",
//         },
//     };
//     const res = await fetch(url, options);
//     const data = await res.json();
//     try {
//         const userResponse = await fetch(
//           `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1/${userId}`
//         );
//         const user = await userResponse.json();
//         return user.name;
//       } catch (err) {
//         console.log("Faile to fetch user:", err);
//         return "Unknown";
//       }
// }

// async function post() {
//     const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1/`;
//     const options = {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkzNzRjY2EyNTc1NjM4ZDEwMDk3NzAzYjFhODliYSIsInN1YiI6IjY1MmZiZWRkYTgwMjM2MDBmZDJkOWY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ga70Ew8jOvgDuOUzMiuJgfI8GjGGypablmY74WjMtUs",
//         },
//     };

//     const res = await fetch(url, options);
//     const data = res.json();
//     if (res.ok) {
//         return data;
//     } else {
//         throw Error(data);
//     }
// }
// post("jsonplaceholder.typicode.com", "posts", {})
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

// let u = await post();
// let mT = u.results[0].id;
// let mI = u.results[0].poster_path;
// document.querySelector(".movieTitle").children[0].innerText = `영화제목: ${mI}`;
