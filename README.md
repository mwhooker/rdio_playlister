# Create playlist on Rdio from file

## playlist
http://rd.io/x/QFJLL4tXhA/

## files

### parsepage.js
Parse songlist from http://karaokeunderground.com/?page_id=16

Write output to `songlist.json`.

### main.py
read `songlist.json` and try to identify listed songs on rdio.
create new playlist with results.

## TODO

- [ ] update playlist instead of create new one. The reason is we don't want
    the playlist url to change.
- [ ] reduce false positives. ask for user input if too many results or hdist too high
