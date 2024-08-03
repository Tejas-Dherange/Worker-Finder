import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    reviewOwnerId: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    reviewedProfileId: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Review =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);

export default Review;
