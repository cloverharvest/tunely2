/************
 * DATABASE *
 ************/

/* hard-coded data */
// var albums = [];
// albums.push({
//               _id: 132,
//               artistName: 'Nine Inch Nails',
//               name: 'The Downward Spiral',
//               releaseDate: '1994, March 8',
//               genres: [ 'industrial', 'industrial metal' ]
//             });
// albums.push({
//               _id: 133,
//               artistName: 'Metallica',
//               name: 'Metallica',
//               releaseDate: '1991, August 12',
//               genres: [ 'heavy metal' ]
//             });
// albums.push({
//               _id: 134,
//               artistName: 'The Prodigy',
//               name: 'Music for the Jilted Generation',
//               releaseDate: '1994, July 4',
//               genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
//             });
// albums.push({
//               _id: 135,
//               artistName: 'Johnny Cash',
//               name: 'Unchained',
//               releaseDate: '1996, November 5',
//               genres: [ 'country', 'rock' ]
//             });

var db = require('../models');

// GET /api/albums
function index(req, res) {
  db.Album.find({}, function(err, albums) {
    if(err) {
      return console.log("index error: " + err);
    }
    res.json(albums);
  });
}

//POST /api/albums
function create(req, res) {
  console.log('body', req.body);
  // FILL ME IN !
  // split at comma and remove trailing space
  var genres = req.body.genres.split(',').map(function(item) { return item.trim(); } );
  req.body.genres = genres;

  db.Album.create(req.body, function(err, album) {
    if (err) { console.log("create error: ", err); }
    console.log(album);
    res.json(album);
  });

  //Matt
  // console.log("album created", req.body);
  // var newAlbum = new db.Album(req.body);
  // newAlbum.save(function newAlbumInDbSaver(err, newAlbum) {
  //   if (err) {
  //     return console.log("create error: " + err);
  //   }
  //   res.json(newAlbum);
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
