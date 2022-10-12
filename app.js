const btnGetmovies = document. querySelector(".btn-find");
const container = document.querySelector(".container");

const urlMovies='https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';

btnGetmovies .onclick = async function(){
    // get information from url
    const answer= await fetch(urlMovies);
    const data = await answer.json();
    readMovies(data.entries);
    // console.log(data.entries);
};
function readMovies(movies=data.entries){
    container.innerHTML="";
    movies.forEach((movie, index) => {
        container.innerHTML += `<div class="card">
            <img src="https://dummyimage.com/808x874.png/ff4444/ffffff"/${
              index + 1
            }.png" alt="" />
            <h4>${movie .title}</h4>
            <p>
              ${movie .description}
            </p>
            <p>
              ${movie .programType}
            </p>
          </div>
        `;
      });

}





