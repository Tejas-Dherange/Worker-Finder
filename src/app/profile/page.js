"use client";
import ProfileEdit from "@/components/ProfileEdit";
import ProfileStatic from "@/components/ProfileStatic";
import ToggleButton from "@/components/ToggleButton";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function profile() {
  const [editMode, setEditMode] = useState(false);
  const user = useSession();

  return (
    <>
      <ToggleButton isChecked={editMode} setIsChecked={setEditMode} />
      {editMode ? <ProfileEdit user={user?.data?.user} /> : <ProfileStatic />}
    </>
  );
}
