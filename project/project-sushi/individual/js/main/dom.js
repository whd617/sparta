export function exteriorCard(contentstitle, isvalid, backdrop_path, title, id, name) {
    if (contentstitle === "Movie_Top_Rate" || contentstitle === "Tv_Top_Rate") {
        let top_Rate = document.createElement("div");
    }
}

export function interiorWeb(contentstitle, isvalid, arr) {
    arr.forEach((content) => {
        const { backdrop_path, title, id, name } = movie;
        exteriorCard(contentstitle, isvalid, backdrop_path, title, id, name);
    });
}
