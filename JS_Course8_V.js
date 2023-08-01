const numberOfList = +prompt(' Сколько фильмов вы уже посмотрели?', '');

const personalMovieDataBase = {
	count: numberOfList,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const lastWatchedFilm = prompt('Один из последних просмотреных фильмов? ', ''),
	filmRate = prompt('На сколько его оцените? ', '');

personalMovieDataBase.movies[lastWatchedFilm] = filmRate;

console.log(personalMovieDataBase);