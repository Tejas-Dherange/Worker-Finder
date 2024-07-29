"use server";

import dbConnect from "@/dbConfig/dbConfig";
import Profile from "@/models/profileModel";

export async function createProfile(profileData) {
  await dbConnect();

  const newProfile = new Profile({ ...profileData });

  const result = await newProfile.save();
  return result.lean();
}
