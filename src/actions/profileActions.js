"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/dbConfig/dbConfig";
import Profile from "@/models/profileModel";
import { getServerSession } from "next-auth";

export async function createProfile(profileData) {
  await dbConnect();

  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const profileWithUserEmail = {
    ...profileData,
    userEmail: session?.user?.email,
  };

  const newProfile = new Profile(profileWithUserEmail);
  await newProfile.save();

  // Retrieve the saved profile using a query and lean()
  const result = await Profile.findById(newProfile._id).lean();
  return result;
}

export async function updateProfile(newProfileData) {
  await dbConnect();
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }
  const profileWithUserEmail = {
    ...newProfileData,
    userEmail: session?.user?.email,
  };

  const updatedProfile = await Profile.findOneAndUpdate(
    {
      userEmail: session?.user?.email,
    },
    profileWithUserEmail,
    {
      new: true,
    }
  ).lean();

  return updatedProfile;
}

export async function getProfileInfo() {
  await dbConnect();
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const profile = await Profile.findOne({
    userEmail: session?.user?.email,
  }).lean();

  if (profile) {
    return profile;
  } else {
    return false;
  }
}
