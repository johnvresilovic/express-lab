const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const songs = require('./models/songs.js')

app.engine('madeline', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      const rendered = content.toString()
        .replace('#title#', '<h1>' + options.title + '</h1>').replace('#artist#','<h2>'+ options.artist + '</h2>' )
      return callback(null, rendered)
    })
  })
app.set('views', './views')
app.set('view engine', 'madeline')

app.get('/songs/', (req, res) => {
    res.send(songs);
});

app.get('/work', (req, res) => {
    res.render('template1', { title: 'Work Til I Die', artist: 'S. G. Goodman'})
  })
  
app.get('/wrapping', (req, res) => {
    res.render('template1', { title: 'Christmas Wrapping', artist: 'The Waitresses'})
  })
  
app.get('/bullet', (req, res) => {
    res.render('template1', { title: 'Bullet with Butterfly Wings', artist: "Smashing Pumpkins"})
  })

app.get('/moon', (req, res) => {
    res.render('template1', { title: 'Yellow Moon', artist: 'The Neville Brothers'})
  })
  
app.get('/plates', (req, res) => {
    res.render('template2', { title: 'Tennessee Plates', artist: 'John Hiatt'})
  })
  
app.get('/crazy', (req, res) => {
    res.render('template2', { title: "Let's Go Crazy", artist: 'Prince'})
  })

app.get('/bad', (req, res) => {
    res.render('template2', { title: 'Bad (Live)', artist: 'U2' })
  })

app.get('/stone', (req, res) => {
    res.render('template2', { title: 'Like a Rolling Stone', artist: "Bob Dylan"})
  })

app.get('/songs/:indexOfSongsArray', (req, res) => {
    res.send(songs[req.params.indexOfSongsArray]);
});

app.listen(port,() => {
    console.log('Listening on port' , port);
});