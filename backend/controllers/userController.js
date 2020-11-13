const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//@desc Regiseter a user
//@route POST /api/users/register
//@auth Public
const registerUser = asyncHandler(async (req, res) => {
  //get the info from the request
  const {
    name,
    email,
    password,
    website,
    location,
    bio,
    position,
    images,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User with that email already exists.");
  }

  const user = await User.create({
    name,
    email,
    password,
    website,
    location,
    bio,
    position,
    images,
  });

  //user.token =

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc auth process to login user
//@ route /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  //matchPassword function from the user model
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      website: user.website,
      location: user.location,
      bio: user.bio,
      position: user.position,
      images: user.images,
    });
  } else {
    //if there is no existing user or password is incorrect
    res.status(401);
    throw new Error("Invalid Email or password");
  }
});

//@desc Get the user profile data
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  //req.user._id is coming from the jwt token
  const user = await User.findOne(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      website: user.website,
      location: user.location,
      bio: user.bio,
      position: user.position,
      images: user.images,
    });
  } else {
    //my favorite status code
    //user not found
    res.status(404);
    throw new Error("User not found.");
  }
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      website: updatedUser.website,
      location: updatedUser.location,
      bio: updatedUser.bio,
      position: updatedUser.position,
      images: updatedUser.images,
      token: generateToken(updateUser._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//@desc GET all users
//@route GET /api/users/all
//@access Public
const getUsers = asyncHandler(async (req, res) => {
  //empty object means to get all users
  const users = await User.find({});
  res.json(users);
});

// @desc Get user by id
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Delete user
// @route Delete /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.send(404);
    throw new Error("User not found");
  }
});

//@desc Update user
//@route PUT /api/users/:id
//@access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found.");
  }
});

module.exports = {
  registerUser: registerUser,
  authUser: authUser,
  getUserProfile: getUserProfile,
  updateUserProfile: updateUserProfile,
  getUsers: getUsers,
  deleteUser: deleteUser,
  getUserById: getUserById,
  updateUser: updateUser,
};
