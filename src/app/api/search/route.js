import dbConnect from "@/dbConfig/dbConfig";
import Profile from "@/models/profileModel";

export default async function GET(req, res) {
  const { query } = req;
  const { profession, location } = query;

  await dbConnect();

  const aggregationPipeline = [];

  if (profession) {
    aggregationPipeline.push({
      $search: {
        index: "profession_index",
        autocomplete: {
          query: profession,
          path: "profession",
          fuzzy: {
            maxEdits: 2,
          },
        },
      },
    });
  }

  if (location) {
    aggregationPipeline.push({
      $search: {
        index: "location_index",
        autocomplete: {
          query: location,
          path: "location",
          fuzzy: {
            maxEdits: 2,
          },
        },
      },
    });
  }

  if (aggregationPipeline.length === 0) {
    return res
      .status(400)
      .json({ error: "At least one search parameter is required" });
  }

  try {
    const results = await Profile.aggregate(aggregationPipeline);
    res.status(200).json(results);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to perform search", details: error.message });
  }
}
