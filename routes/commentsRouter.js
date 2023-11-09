// routes/commentsRouter.js
import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const commentsRouter = express.Router();
const uri = "YOUR_MONGO_CONNECTION_STRING"; // Replace with MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Route to get comments for a specific image
commentsRouter.get('/:imageId', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("YOUR_DB_NAME");
    const comments = database.collection("comments");
    
    const imageId = new ObjectId(req.params.imageId);
    const imageComments = await comments.find({ imageId: imageId }).toArray();
    
    res.json(imageComments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving comments');
  } finally {
    await client.close();
  }
});

// Route to post a comment for a specific image
commentsRouter.post('/:imageId', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("YOUR_DB_NAME");
    const comments = database.collection("comments");
    
    const imageId = new ObjectId(req.params.imageId);
    const comment = { ...req.body, imageId: imageId, createdAt: new Date() };
    
    const result = await comments.insertOne(comment);
    
    if (result.acknowledged) {
      res.status(201).json(result.ops[0]);
    } else {
      res.status(400).send('Comment could not be posted');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error posting comment');
  } finally {
    await client.close();
  }
});

export default commentsRouter;
