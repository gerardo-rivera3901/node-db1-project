const validatePost = (req, res, next) => {
  if(!req.body) {
    res.status(400).json({ message: 'Missing Post Entries'});
  } else if (!req.body.name || !req.body.budget) {
    res.status(400).json({ message: 'Missing required Name or Budget field' });
  } else {
    next();
  }
};

module.exports = {
  validatePost
};