import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (selectedCollection) => {
  const mongoUrl = process.env.MONGODB_URI;
  const client = new MongoClient(mongoUrl);
  await client.connect();
  const db = await client.db("mern-auth");
  const collection = db.collection(selectedCollection);
  return { client, collection };
};

export default connectDB;

// import "dotenv/config";
// import { MongoClient } from "mongodb";

// function MyMongoDB() {
//   const myDB = {};

//   const uri = process.env.MONGODB_URI;

//   function connect() {
//     const client = new MongoClient(uri);
//     const db = client.db("ListedArtifacts");
//     return { client, db };
//   }

//   myDB.getBuddha = async function (query = {}) {
//     const { client, db } = connect();

//     try {
//       const buddha = await db.collection("buddha").find(query).toArray();
//       return buddha;
//     } finally {
//       await client.close();
//     }
//   };
//   return myDB;
// }

// const myDB = MyMongoDB();

// export default myDB;
