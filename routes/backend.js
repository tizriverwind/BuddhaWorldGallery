// backend.js
import express from "express";
import { MongoClient, ObjectId } from "mongodb";

// Replace with your actual MongoDB URI and database name
const uri = "YOUR_MONGO_CONNECTION_STRING";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const router = express.Router();

router.get('/images/:imageId', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("YOUR_DB_NAME");
    const collection = database.collection("ListedArtifacts");

    // Convert the imageId to an ObjectId for MongoDB lookup
    const imageId = new ObjectId(req.params.imageId);
    const imageDetails = await collection.findOne({ _id: imageId });

    if (imageDetails) {
      res.json(imageDetails);
    } else {
      res.status(404).send('Image not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving image details');
  } finally {
    await client.close();
  }
});

export default router;
