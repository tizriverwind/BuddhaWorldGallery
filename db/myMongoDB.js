import "dotenv/config";
import { MongoClient } from "mongodb";

function MyMongoDB() {
  const myDB = {};

  const uri = process.env.MONGODB_URI;

  function connect() {
    const client = new MongoClient(uri);
    const db = client.db("ListedArtifacts");
    return { client, db };
  }

  myDB.getBuddha = async function (query = {}) {
    const { client, db } = connect();

    try {
      const buddha = await db.collection("buddha").find(query).toArray();
      return buddha;
    } finally {
      await client.close();
    }
  };
  return myDB;
}

const myDB = MyMongoDB();

export default myDB;
