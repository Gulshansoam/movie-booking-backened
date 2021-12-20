const db = require("../models");
const Artist = db.artists;

exports.create = async (req, res) => {
 
  if (!req.body.artistid) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }

 
try {
  const artist = new Artist({
    artistid: req.body.artistid,
    first_name: req.body.first_name,
    wiki_url: req.body.wiki_url,
    profile_url: req.body.profile_url,
    movies: req.body.movies
    });
   
    let saveArtist = await artist.save(); 
  
    res.send(saveArtist); 
  } catch (err) {
    
    res.status(500).send({
          message:
            err.message || "Error."
        });
  }}


exports.findAllArtists = async (req, res) => {
    try {
    let data = await Artist.find({});
  
  res.send(data);
    } catch(err) {
        res.status(500).send({
          message:
            err.message || "Internal error"
        });
      }
  };

