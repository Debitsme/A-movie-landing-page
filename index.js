const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.querySelector("#search");

const moviesapi="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"


const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  alina(moviesapi)

 async function alina (url)  {
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data.results[0]);
  showMovie(data.results);
};

function showMovie(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const img = document.createElement("div");
    img.classList.add("movie");
    img.innerHTML = `<img src="${
      "https://image.tmdb.org/t/p/w1280" + movie.poster_path
    }" alt="">
  <div class="movie-info">
      <h3>${movie.title}</h3>


      <span class="${run(movie.vote_average)}">${movie.vote_average}</span>
  </div> 
  <div class="overview">
  <h3>Overview</h3>
  ${movie.overview}</div>
  `;

    main.append(img);
  });
}

function run(vote) {
  if (vote > 7.5) {
    return "orange";
  }
  if (vote < 8) {
    return "green";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchterm=search.value;
if(searchterm){
  alina(SEARCHAPI+searchterm)

  search.value='';
}

});
console.log(alina());
