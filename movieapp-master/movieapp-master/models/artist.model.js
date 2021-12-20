module.exports = mongoose => {
    const Artists = mongoose.model(
        "artists",
        mongoose.Schema(
          {
            artistid: { type : String , required : true },
            first_name: { type : String , required : true },
            last_name: String ,
            wiki_url: { type : String},
            profile_url: { type : String },
            movies:[String]
          },
          { timestamps: true }
        )
      );
    
      return Artists;
    };

