import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/dbConfig/dbConfig";
import Review from "@/models/reviewModel";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";
export async function createReview(reviewData) {
  await dbConnect();

  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  // Validate reviewedProfileId as ObjectId
  if (!mongoose.Types.ObjectId.isValid(reviewData.reviewedProfileId)) {
    throw new Error("Invalid reviewedProfileId");
  }

  const reviewWithOwnerEmail = {
    ...reviewData,
    reviewOwnerEmail: session?.user?.email,
  };

  const newReview = new Review(reviewWithOwnerEmail);
  await newReview.save();

  // Retrieve the saved profile using a query and lean()
  const result = await Review.findById(newReview._id).lean();
  return result;
}

export async function updateReview(newReviewData, id) {
  await dbConnect();
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const updatedReview = await Review.findByIdAndUpdate(
    id,
    { $set: { review: newReviewData } },
    { new: true } // Return the updated document
  ).lean();

  return updatedReview;
}
