// backend.js
import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const uri = "YOUR_MONGO_CONNECTION_STRING";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const router = express.Router();

// Connect to the client once and reuse the connection
client.connect().catch(error => console.error('Connection error:', error));

router.get('/images/:imageId', async (req, res) => {
  try {
    const database = client.db("BuddhaWorldGallery");
    const collection = database.collection("ListedArtifacts");
    const imageId = new ObjectId(req.params.imageId);

    const imageDetails = await collection.findOne(
      { _id: imageId },
      { projection: { imageUrl: 1 } } // Make sure the field name matches your MongoDB document
    );

    if (imageDetails) {
      res.json({ imageUrl: imageDetails.imageUrl });
    } else {
      res.status(404).send('Image not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving image URL');
  }
  // Note: We're no longer closing the client after each request
});

export default router;
