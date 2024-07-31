import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviewOwner: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  reviewedProfile: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
});

const Review =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default Review;
