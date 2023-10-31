const mongoose=require("mongoose")

mongoose
.connect("mongodb+srv://admin:oaV7Cu1gJmPdF1Pe@cluster0.eencina.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
})
.then((data) => {
  console.log(`Mongodb connected with server: ${data.connection.host}`);
}).catch((e)=>{
    console.log(e,"\n while connection to databasee")

});
