import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  userType: {
    type: String,
  },
  avatarURI: {
    type: String,
  },
  savedProfiles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerfied: {
    type: Boolean,
    default: false,
    required: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
