function parseNote(note) {
	var noteArr = note.split("*");
	// console.log(noteArr);
	var noteObj = {};

	for(i = 0; i < noteArr.length; i++) {

		if (!(noteArr[1])) {
			noteObj.pitch = noteArr[0];
			noteObj.beats = 1;
		} else {
			noteObj.pitch = noteArr[0];
			noteObj.beats = noteArr[1];
		}

	}

	return noteObj;

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

// console.log(parseNote("C#*2"));
