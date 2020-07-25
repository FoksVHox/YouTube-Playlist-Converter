const ytlist = require('youtube-playlist');
const fs = require('fs');

const url = 'https://www.youtube.com/playlist?list=PLADVCUxaeYaJGPmyvJkBhqokERyOnenAg';
const name = 'Foks.playlist'

ytlist(url, 'url').then(res => {
	let links = '';
	res.data.playlist.forEach(e => {
		links += e+'\n'
	});
	fs.writeFile(name+'.txt', links, (err) => {
		if (err) throw err;
		console.log('The link has been saved!')
	})
});