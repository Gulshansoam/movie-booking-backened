var http = require('http');
var movieroutes = require("./routes/movie.routes");
var artistroutes = require("./routes/artist.routes");
var genreroutes = require("./routes/genre.routes");


var express = require('express');
var app = express();
path = require("path"),
cors = require("cors"); 
bodyParser = require("body-parser");

const PORT = 8085;


const corsOpts = {
  origin: '*',

};

app.use(cors(corsOpts))



app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
});
app.use('/api',movieroutes);

// app.get('/movies', function (req, res) {
//     res.json({ message: "All Movies Data in JSON format from Mongo DB" });
// });

app.use('/api',artistroutes);
// app.get('/genres', function (req, res) {
//     res.json({ message: "All Genres Data in JSON format from Mongo DB" });
// });

app.use('/api',genreroutes);
// app.get('/artists', function (req, res) {
//     res.json({ message: "All Artists Data in JSON format from Mongo DB" });
// });


app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});



require("./routes/user.routes")(app);


app.listen(PORT, function () {
    console.log('Movie app listening on port',PORT);
});

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });