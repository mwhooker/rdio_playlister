var songlist = $('tr').map(function(a,b) {
  var children = $(b).children();
  return {
    'artist':$(children[0]).text(),
    'title': $(children[1]).text(),
    'album': $(children[2]).text()
  }
});
JSON.stringify(songlist.toArray())
