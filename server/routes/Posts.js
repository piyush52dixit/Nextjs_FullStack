// In Posts.js
const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

// Example route
router.get("/", async (req, res) => {
  const listOFPosts = await Posts.findAll();
  res.json(listOFPosts);
});
router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
