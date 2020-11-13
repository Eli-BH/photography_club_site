const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
      //x
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
    website: {
      //this includes instagram
      type: String,
    },
    location: {
      //x
      type: String,
    },
    bio: {
      //x
      type: String,
    },
    position: {
      //x
      //photographer,
      //model,
      //photographer/model,
      type: String,
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
