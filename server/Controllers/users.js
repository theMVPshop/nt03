// DB Connection code

// All users
const allUsers = (req, res) => {
  res.json({ action: 'Get all Users' });
};

// get a specific user by ID
const userByID = (req, res) => {
  let userID = req.params.id;

  res.json({ action: `Requested user ID ${userID}` });
};

// Update a specific user
const updateUser = (req, res) => {
  let userID = req.params.id;

  res.json({ action: `User ID ${userID} was updated` });
};

// Create a new user
const createUser = (req, res) => {
  let newUser = req.body;

  res.json({
    User_Created: newUser,
  });
};

module.exports = { allUsers, userByID, updateUser, createUser };
