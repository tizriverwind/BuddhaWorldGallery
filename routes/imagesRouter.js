// routes/imagesRouter.js
import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const imagesRouter = express.Router();
const uri = "YOUR_MONGO_CONNECTION_STRING"; // Replace with MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Route to get a list of all images
imagesRouter.get('/', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("YOUR_DB_NAME");
    const collection = database.collection("ListedArtifacts");
    
    const images = await collection.find({}).toArray(); // Get all images
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving images');
  } finally {
    await client.close();
  }
});

// Route to get a specific image by id
imagesRouter.get('/:imageId', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("YOUR_DB_NAME");
    const collection = database.collection("ListedArtifacts");
    
    const imageId = new ObjectId(req.params.imageId);
    const image = await collection.findOne({ _id: imageId });
    
    if (image) {
      res.json(image);
    } else {
      res.status(404).send('Image not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving image');
  } finally {
    await client.close();
  }
});

export default imagesRouter;
