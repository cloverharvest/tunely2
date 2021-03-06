/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
// var sampleAlbums = [];
// sampleAlbums.push({
//              artistName: 'Ladyhawke',
//              name: 'Ladyhawke',
//              releaseDate: '2008, November 18',
//              genres: [ 'new wave', 'indie rock', 'synth pop' ]
//            });
// sampleAlbums.push({
//              artistName: 'The Knife',
//              name: 'Silent Shout',
//              releaseDate: '2006, February 17',
//              genres: [ 'synth pop', 'electronica', 'experimental' ]
//            });
// sampleAlbums.push({
//              artistName: 'Juno Reactor',
//              name: 'Shango',
//              releaseDate: '2000, October 9',
//              genres: [ 'electronic', 'goa trance', 'tribal house' ]
//            });
// sampleAlbums.push({
//              artistName: 'Philip Wesley',
//              name: 'Dark Night of the Soul',
//              releaseDate: '2008, September 12',
//              genres: [ 'piano' ]
//            });
/* end of hard-coded data */

//
$(document).ready(function() {
  console.log('app.js loaded!');
    $.get('/api/albums').success(function (albums) {
      albums.forEach(function(album){
        renderAlbum(album);
      });
    });

    $('#album-form form').on('submit', function(evt) {
      evt.preventDefault();
      var formData = $(this).serialize();
      console.log('formData', formData);
      $.ajax({
        method: 'POST',
        url: '/api/albums',
        data: formData,
        success: newAlbumSuccess,
        error: newAlbumError,
      });
      $(this).trigger("reset");
    });
});

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album', album);
  var albumHtml = $('#albums-template').html();
  var albumsTemplate = Handlebars.compile(albumHtml);
  var html = albumsTemplate({album: album});
  $('#albums').prepend(html);
}

function newAlbumSuccess(album) {
  console.log('album after POST', album);
  renderAlbum(album);
}

function newAlbumError(album) {
  console.log("Sorry, wasn't able to add the new album.");
}
