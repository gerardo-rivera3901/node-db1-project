const express = require('express');
const router = express.Router();
const Account = require('./account-model');
const Middleware = require('../middleware/middleware')

router.get('/', async (req, res) => {
  try {
    const data = await Account.getAll();
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Account.getById(id);
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', Middleware.validatePost, async (req, res) => {
  try {
    const post = req.body;
    const data = await Account.create(post);
    const newAccount = await Account.getById(data[0]);
    res.status(201).json(newAccount);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    await Account.update(id, changes);
    const updated = await Account.getById(id);
    res.status(200).json(updated);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Account.delete(id);
    res.status(200).json({ message: `Post with id of ${id} was deleted`});
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;