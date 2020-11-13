const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const admin = require("../middleware/authMiddleware");

const {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
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
router
  .route("/profile")
  .put(protect, updateUserProfile)
  .get(protect, getUserProfile);

//@route GET /api/users/allusers
// @access Public
router.route("/all").get(getUsers);

// @route GET /api/users/:id @access Private
//@route PUT /api/users/:id
//@route Delete /api/users/:id @access Private/Admin
//
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

module.exports = router;
