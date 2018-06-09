var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode')

fs.readdir('./', 'utf-8', function(err, files){
	console.log(files)
	fs.writeFile('./FolderFiles.txt', files, function(err){
		if (err) throw err
		console.log('Zapisano!'.blue)
	})
})