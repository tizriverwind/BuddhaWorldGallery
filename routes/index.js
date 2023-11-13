import express from "express";
import myDB from "../db/myMongoDB.js";

const router = express.Router();

router.get("/artifacts", async (req, res) => {
  try {
    const buddha = await myDB.getBuddha();
    res.json(buddha);
  } catch (error) {
    console.error("Error fetchiing artifacts:", error);
    res.status(500).json({ error: "Failed to fetch artifacts" });
  }
});

export default router;
