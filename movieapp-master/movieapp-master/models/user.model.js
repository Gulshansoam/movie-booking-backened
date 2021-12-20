module.exports = mongoose => {
    const Users = mongoose.model(
        "users",
        mongoose.Schema(
          {
            userid: { type : String , required : true },
            email: { type : String , unique : true, required : true , dropDups: true},
            first_name: { type : String , required : true },
            last_name: String ,
            username: { type : String , required : true },
            contact: { type : Number ,unique : true, required : true  },
            password: {type: String, required: true},
            role: String,
            isLoggedIn: Boolean,
            uuid: String,
            accesstoken: String,
            coupens: [String],
            bookingRequests: [String]
          },
          { timestamps: true }
        )
      );
    
      return Users;
    };