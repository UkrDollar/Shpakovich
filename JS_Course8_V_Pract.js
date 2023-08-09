let numberOfList;


function start () {
	while (numberOfList == '' || numberOfList == null || isNaN(numberOfList)){
		numberOfList = +prompt(' Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDataBase = {
	count: numberOfList,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


function detectPersonalLvl(){

	if(personalMovieDataBase.count < 10){
		console.log('Watched quite a few films!');
	} else if (personalMovieDataBase.count >= 10 && personalMovieDataBase.count < 30){
		console.log('You cool viewer!');
	} else if (personalMovieDataBase.count >= 30){
		console.log('You movie guy!');
	} else {
		console.log('Error!');
	}
}

detectPersonalLvl();

function rememberMyFilms (){
	for (let i = 0; i < 2; i++){
		const lastWatchedFilm = prompt('Один из последних просмотреных фильмов? ', '').trim(),
			filmRate = prompt('На сколько его оцените? ', '');

		if(lastWatchedFilm != null && filmRate != null && lastWatchedFilm != '' && filmRate != '' && lastWatchedFilm.length < 50){
			personalMovieDataBase.movies[lastWatchedFilm] = filmRate;
			console.log('Done!');
	
		}else {
			console.log('Error!');
			i--;
		}
	}
}

rememberMyFilms();

function showMyDB(hidden){
	if (!hidden){
		console.log(personalMovieDataBase);
	}
}

showMyDB(personalMovieDataBase.privat);

function writeYourGenres (){
	for (let i = 1; i <= 3; i++){
		personalMovieDataBase.genres[i - 1] = prompt(`Your favorite genres is numbered? ${i}`);
	}
}

writeYourGenres();
