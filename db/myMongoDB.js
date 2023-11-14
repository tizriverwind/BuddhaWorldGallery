//import "dotenv/config";
import { MongoClient, ObjectId } from "mongodb";

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

  myDB.createArtifact = async (newArtifact) => {
    const { client, db } = connect();
    const artifactsCollection = db.collection("ListedArtifacts");

    try {
      const result = await artifactsCollection.insertOne(newArtifact);
      return result;
    } finally {
      console.log("db closing connection");
      client.close();
    }
  };

  myDB.getArtifactById = async (artifactId) => {
    const { client, db } = connect();
    const artifactsCollection = db.collection("ListedArtifacts");

    try {
      const filter = { _id: new ObjectId(artifactId) };
      const artifact = await artifactsCollection.findOne(filter);
      return artifact;
    } finally {
      console.log("db closing connection");
      client.close();
    }
  };

  myDB.updateArtifact = async (artifactId, updateData) => {
    const { client, db } = connect();
    const artifactsCollection = db.collection("ListedArtifacts");

    try {
      const filter = { _id: new ObjectId(artifactId) };
      const update = { $set: updateData };
      const result = await artifactsCollection.updateOne(filter, update);
      if (result.matchedCount > 0) {
        return result; //await artifactsCollection.findOne(filter);
      }
      return null;
    } finally {
      console.log("db closing connection");
      client.close();
    }
  };

  myDB.deleteArtifact = async (artifactId) => {
    const { client, db } = connect();
    const artifactsCollection = db.collection("ListedArtifacts");

    try {
      const filter = { _id: new ObjectId(artifactId) };
      const result = await artifactsCollection.deleteOne(filter);
      return { deletedCount: result.deletedCount };
    } finally {
      console.log("db closing connction");
      client.close();
    }
  };

  return myDB;
}

const myDB = MyMongoDB();

export default myDB;
