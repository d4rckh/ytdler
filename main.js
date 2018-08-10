const fs = require('fs');
const ytdl = require('ytdl-core');

const loggic = require('loggic')
var l = new loggic.logger()

//ytdl('https://www.youtube.com/watch?v=b8X30jt5Qi8', {filter: 'audioonly'}).pipe(fs.createWriteStream('audioVideo.mp3'));

var vids = require('./vids.json')

l.log({
    text: 'TO BE USED ONLY FOR EDUCATIONAL PROPOSE OR TO BE USED IN A LEGAL PROPOSE!',
    color: 'red'
}, 'YTDLER')

l.log({
    text: 'Downloading ' + vids.length + ' videos\'s audio',
    color: 'yellow'
}, 'YTDLER')

vids.forEach(v => {
    ytdl.getInfo(v, (err, info) => {
        if (err) {
            l.log({
                text: 'Skiping one video, error: ' + err.toString(),
                color: 'red'
            }, 'YTDLER') 
        } else {
            l.log({
                text: 'Downloading ' + info.title,
                color: 'green'
            }, 'YTDLER')

            ytdl('https://www.youtube.com/watch?v=' + v, {filter: 'audioonly'}).pipe(fs.createWriteStream(info.title + '.mp3'));
        }
        

    });
})