import dbConnect from "@/dbConfig/dbConfig";
import Profile from "@/models/profileModel";

/**
 * GET /api/search
 * Search for profiles based on the query string
 * @param {string} profession
 * @param {string} location
 * @return {object} profiles
 */
export default async function GET(req, res) {
  // Get the query string from the request
  const { query } = req;
  // Extract the profession and location from the query string
  const { profession, location } = query;

  // Connect to the database
  await dbConnect();

  // Search for profiles based on the query string
  try {
    const profiles = await searchProfileList(profession, location);
    // Return the profiles as JSON
    res.status(200).json(profiles);
  } catch (error) {
    // Return an error if something went wrong
    res.status(500).json({ error: "Internal Server Error" });
  }
}

