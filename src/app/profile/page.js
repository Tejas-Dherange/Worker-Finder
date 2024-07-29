"use client";
import ProfileEdit from "@/components/ProfileEdit";
import { useSession } from "next-auth/react";
import React from "react";

export default function profile() {
  const user = useSession();

  return (
    <>
      <ProfileEdit user={user?.data?.user} />
    </>
  );
}
