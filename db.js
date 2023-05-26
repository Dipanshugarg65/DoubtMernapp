const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dipanshugarg65:Garg1234@merncluster.xvv4vfy.mongodb.net/food?retryWrites=true&w=majority'
const mongoDB = async()=>{
     await mongoose.connect(mongoURI,{ useNewUrlParser:true },async(err,result)=>{

if(err) console.log("---",err)
else{
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food to ");
        // console.log( fetched_data.find({}))
        fetched_data.find({}).toArray(function(err,data){
            if(err)console.log(err);
            else console.log(data);
        })
}
    });
}

module.exports=mongoDB;


