function parseNote(note) {
	var noteArr = note.split("*");
	// console.log(noteArr);
	var noteObj = {};

	for(i = 0; i < noteArr.length; i++) {

	}

}
parseNote("C#*2");

function parseSong(songString) {
	var songArray = songString.split(" ");
	var songLength = songArray.length;
	var song = [];

	var i = 0
	while (i < songLength){
		song.push(parseNote(songArray(i)));
	}

	return song;
}
