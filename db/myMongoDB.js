//import "dotenv/config";
import { MongoClient } from "mongodb";

function MyMongoDB() {
  const myDB = {};

  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

  function connect() {
    const client = new MongoClient(uri);
    const db = client.db("buddhaWorld");
    return { client, db };
  }

  myDB.getBuddha = async function (query = {}) {
    const { client, db } = connect();

    try {
      const buddha = await db
        .collection("ListedArtifacts")
        .find(query)
        .toArray();

      return buddha;
    } finally {
      await client.close();
    }
  };
  return myDB;
}

const myDB = MyMongoDB();

export default myDB;
