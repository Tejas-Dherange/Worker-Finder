export default async function handler(req, res) {
  await dbConnect();

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === 'POST') {
    try {
      const { reviewedProfileId, ...reviewData } = req.body;

      if (!mongoose.Types.ObjectId.isValid(reviewedProfileId)) {
        return res.status(400).json({ error: "Invalid reviewedProfileId" });
      }

      const reviewWithOwnerEmail = {
        ...reviewData,
        reviewOwnerEmail: session.user.email,
      };

      const newReview = new Review(reviewWithOwnerEmail);
      await newReview.save();

      const result = await Review.findById(newReview._id).lean();
      return res.status(201).json(result);
    } catch (error) {
      console.error("Error in API creating review:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
