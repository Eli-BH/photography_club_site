const mongoose = require("mongoose");

const photoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    instagram: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    bio: {
      type: String,
    },
    position: {
      //photographer,
      //model,
      //photographer/model,
      type: String,
    },
    images: [photoSchema],
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("User", userSchema);

module.exports = Users;
