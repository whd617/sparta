// routes/posts.route.js

const express = require('express');
const { Posts } = require('../models/index.cjs');
const router = express.Router();

// 게시글 상세 조회
router.get('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  const post = await Posts.findOne({
    attributes: ['postId', 'title', 'content', 'createdAt', 'updatedAt'],
    where: { postId },
  });

  res.status(200).json({ data: post });
});

// 게시글 전체 조회
router.get('/posts', async (req, res) => {
  const posts = await Posts.findAll({
    attributes: ['postId', 'title', 'createdAt', 'updatedAt'],
  });

  res.status(200).json({ data: posts });
});

// 게시글 생성
router.post('/posts', async (req, res) => {
  const { title, content, password } = req.body;
  const post = await Posts.create({ title, content, password });

  res.status(201).json({ data: post });
});

module.exports = router;
