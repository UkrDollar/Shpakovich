function first () {

	setTimeout(function() {
		console.log(1);
	},500);
}

function second() {
	console.log(2);
  
}
first();
second();

function learnJS(lang, callback){
	console.log(`I lear ${lang}`);
	callback();
}

function done (){
	console.log('I finish this lesson!');
}

learnJS('JavaScript', done);