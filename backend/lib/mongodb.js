import {MongoClient} from "mongodb";

if(!process.env.MONGO_URI){
    throw new Error("Invalid environment variable : MONGODB_URI");
}

const uri = process.env.MONGODB_URI;
const options = {};

let MongoClient
let clientPromise

if(process.env.NODE_ENV==="development"){
    if(!global._mongoClientPromise){
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect();
    }
   clientPromise = global._mongoClientPromise
}
else {
    // in productin mode its best to not use a global variable
    client = new MongoClient(uri, options);
    clientPromise = client.connet();
}

export default clientPromise;