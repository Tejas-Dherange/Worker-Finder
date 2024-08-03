import { getProfileInfoViewPage } from "@/actions/profileActions";
import ProfileStatic from "@/components/ProfileStatic";
import ReviewList from "@/components/Reviewlist";

import React from "react";

export default async function page({ params }) {
  console.log(params);
  const profile = await getProfileInfoViewPage(params?.profileId);
  console.log(profile);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40 mx-auto max-w-[800px] mt-5 ">
        <ProfileStatic profile={profile} viewMode />
      </div>
      <ReviewList />
    </>
  );
}
