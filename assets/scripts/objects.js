// const userChosenKeyName = 'level';

// const person = {
//     'first name': 'Gábor',
//     hobbies: ['Sports', 'Cooking'],
//     [userChosenKeyName]: '...',
//     greet() {

//     },
//     1.5: 'Hello'
// }

const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies = []

const renderMovies = () => {
    const movieList = document.getElementById('movie-list')

    if (movies.length === 0) {
        movieList.classList.remove('visible')
    } else {
        movieList.classList.add('visible')
    }
    movieList.innerHTML = ''
    movies.forEach(
        (movie) => {
            const movieEl = document.createElement('li');
            let text = movie.info.title + ' - ';
            for (const key in movie.info) {
                 if (key !== 'title') {
                    text += `${key}: ${movie.info[key]}`
                 }   
                }
            movieEl.textContent = movie.info.title;
            movieList.append(movieEl);
        }
    )
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value
    const extraName = document.getElementById('extra-name').value
    const extraValue = document.getElementById('extra-value').value

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random()
    }

    movies.push(newMovie);
    renderMovies();
}

addMovieBtn.addEventListener('click', addMovieHandler);
