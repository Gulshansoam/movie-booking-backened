const db = require("../models");
const Genre = db.genres;


exports.create = async (req, res) => {

  if (!req.body.genreid) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

 
try {
  const genre = new Genre({
    genreid: req.body.genreid,
    genre: req.body.genre
    });
   
    let saveGenre = await genre.save(); 
  
    res.send(saveGenre); 
  
  } catch (err) {
    
    res.status(500).send({
          message:
            err.message || "Error."
        });
  }}

  
exports.findAllGenres = async (req, res) => {
    try {
    let data = await Genre.find({});
  
  res.send(data);
    } catch(err) {
        res.status(500).send({
          message:
            err.message || "Internal error"
        });
      }
  };