//const { movies } = require("../models");
const db = require("../models");
const Movie = db.movies;


exports.create = async (req, res) => {

    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }


try {
 
    const movie = new Movie({
        movieid: req.body.movieid,
        title: req.body.title,
        published : req.body.published ? req.body.published : false,
        released : req.body.released,   
        poster_url: req.body.poster_url,
        release_date : req.body.release_date,
        publish_date : publish_date,
        artists : req.body.artists,
        genres : req.body.genres,
        duration : req.body.duration,
        critic_range : req.body.critic_range,
        trailer_url : req.body.trailer_url,
        wiki_url: req.body.wiki_url,
        story_line: req.body.story_line,
        shows: req.body.shows
      
    });
    
    let saveMovie = await movie.save(); 
    
    res.send(saveMovie); 
   
  } catch (err) {
    
    res.status(500).send({
          message:
            err.message || "Some error occurred."
        });
  }}




exports.findAllMovies = async (req, res) => {
    try {
    let data = await Movie.find({});
 
  res.send(data);
    } catch(err) {
        res.status(500).send({
          message:
            err.message || "Internal error"
        });
      }
  };



  exports.findOne = async (req, res) => {
    const id = req.params.movieId;
    const data =await db.movies.find({movieid: id});
    console.log({movieid:id});
    console.log(data);
    if(!data){
        res.status(404).send({ message: "Not found" + id });
    }
    res.json(data);

}
    


exports.findShows = async (req, res) => {
  try {
    const id = req.params.movieid;
  let data = await Movie.findById(id).select('shows').distinct('shows');

res.send({movies:data});
  } catch(err) {
      res.status(500).send({
        message:
          err.message || "Internal error"
      });
    }
};

// exports.findShows = async (req, res) => {

//   const id=req.params.movieId;
//   const show=await db.movies.findById({movies:id}).shows;
//   if(!show || show.length === 0){
//       res.status(404).send({ message: "Not found shows with id " + id });
//   }
//   else{
//       res.json(show);
//   }

//}

