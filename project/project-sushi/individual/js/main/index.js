// OPEN API
import * as sys from "./dom.js";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkzNzRjY2EyNTc1NjM4ZDEwMDk3NzAzYjFhODliYSIsInN1YiI6IjY1MmZiZWRkYTgwMjM2MDBmZDJkOWY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ga70Ew8jOvgDuOUzMiuJgfI8GjGGypablmY74WjMtUs",
    },
};
async function post() {}

let entireArr = [];

const translateOpenAPI = async (url) => {
    try {
        const res = await fetch(url, options);
        const json = await res.json();
        const { results } = json;
        entireArr = results;
        throw error;
    } catch (e) {
        console.error(error);
    }
};

const openApiUrl = [
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1/",
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
];

const init = async () => {
    const apiUrlArrayAnalyze = openApiUrl.map(async (contents) => {
        const result = await translateOpenAPI(contents);
        return result;
    });
    try {
        const contentsData = await Promise.all(apiUrlArrayAnalyze);
        sys.interiorWeb("Movie_Top_Rate", contentsData[0], false);
        sys.interiorWeb("Movie_Now_Playing", false, contentsData[1]);
        sys.interiorWeb("Movie_Pupular", false, contentsData[2]);
        sys.interiorWeb("Movie_Upcoming", false, contentsData[3]);
        sys.interiorWeb("Tv_Top_Rate", true, contentsData[4]);
        sys.interiorWeb("Tv_Popular", true, contentsData[5]);
        sys.interiorWeb("Tv_Airing_Today", true, contentsData[6]);
        sys.interiorWeb("Tv_On_The_Air", true, contentsData[7]);
        throw error;
    } catch (e) {
        console.error();
    }
};
