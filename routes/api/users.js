const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
router.post(
  '/',
  [
    check('name', 'Name is required').notEmpty(),
    check('email', 'please input a valid mail ').isEmail(),
    check('password', 'please enter password min 6').isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User router is running');
  }
);
module.exports = router;
