
const router = require('express').Router();
const   User   = require('../models/User');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    console.log(users); 

    res.render('homepage', {users} );
    console.log(users); 

  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;
