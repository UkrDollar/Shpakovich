const personalMovieDataBase = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		while (personalMovieDataBase.count == '' || personalMovieDataBase.count == null || isNaN(personalMovieDataBase.count)){
			personalMovieDataBase.count = +prompt(' Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLvl: function(){

		if(personalMovieDataBase.count < 10){
			console.log('Watched quite a few films!');
		} else if (personalMovieDataBase.count >= 10 && personalMovieDataBase.count < 30){
			console.log('You cool viewer!');
		} else if (personalMovieDataBase.count >= 30){
			console.log('You movie guy!');
		} else {
			console.log('Error!');
		}
	},
	showMyDB: function(hidden){
		if (!hidden){
			console.log(personalMovieDataBase);
		}
	},
	toggleVisibleMyDB: function(){
		if (personalMovieDataBase.privat){
			personalMovieDataBase.privat = false;
		} else personalMovieDataBase.privat = true;
	},
	writeYourGenres: function(){
		// for (let i = 1; i <= 3; i++){
		// 	let genre = prompt(`Your favorite genres is numbered? ${i}`);
		// 	if (genre === '' || genre === null){
		// 		console.log('You entered incorrect data or didn`t enter at all!');
		// 		i--;
		// 	} else {
		// 		personalMovieDataBase.genres[i - 1] = genre;
		// 	}
		for (let i = 1; i <2 ; i++) {

			let genres = prompt('Enter your favorite genres separated by commas').toLowerCase();
			if (genres === '' || genres === null){
				console.log('You entered incorrect data or didn`t enter at all!');
				i--;
			} else {
				personalMovieDataBase.genres = genres.split(', ');
				personalMovieDataBase.sort();
			}
		}

		personalMovieDataBase.genres.forEach((item, i) => {
			console.log(`Favorite genre ${i + 1} - it is ${item}`);
		});
	}
};

