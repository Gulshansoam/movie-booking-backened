module.exports = mongoose => {
    const Movies = mongoose.model(
        "movies",
        mongoose.Schema(
          {
            movieid: { type : Number , required : true },
            title: { type : String , required : true },
            published: Boolean,
            released: Boolean,
            poster_url: { type : String ,required : true },
            release_date: { type : Date },
            publish_date: { type : Date },
            artists: [String],
            genres: [String],
            duration: { type : Number, default: 60 , min : 0, max: 1200 },
            critic_range: { type : Number },
            trailer_url: { type : String },
            wiki_url: { type : String },
            story_line: { type : String },
            shows: [String]
        
          },
          { timestamps: true }
        )
      );
    
      return Movies;
    };