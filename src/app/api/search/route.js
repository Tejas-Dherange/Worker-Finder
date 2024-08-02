import dbConnect from "@/dbConfig/dbConfig";
import Profile from "@/models/profileModel";

export default async function GET(req, res) {
  const { query } = req;
  const { profession, location } = query;

  await dbConnect();
  try {
    const profiles = await searchProfileList(profession, location);
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
