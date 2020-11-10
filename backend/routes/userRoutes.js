const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  viewAllUsers,
} = require("../controllers/userController");

// @access Public
// @route POST /api/users/register
router.route("/register").post(registerUser);

// @route POST /api/users/login
// @access Public
router.route("/login").post(authUser);

// @route GET /api/users/profile
// @route PUT /api/users/profile
// @access Private
router.route("/profile").put(updateUserProfile).get(getUserProfile);

//@route GET /api/users/allusers
// @access Private/Admin
router.route("/allusers").put(getUsers);

// @route GET /api/users/:id
//@route PUT /api/users/:id
//@route Delete /api/users/:id
// @access Private/Admin
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

//@desc View all users
//@route GET /api/users
//@access Public
router.route("/").get(viewAllUsers);
module.exports = router;
