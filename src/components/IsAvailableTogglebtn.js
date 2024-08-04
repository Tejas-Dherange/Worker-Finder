"use client";
import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function IsAvailableTogglebtn() {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <ToggleButton
      isChecked={isAvailable}
      setIsChecked={setIsAvailable}
      name={"Available"}
    />
  );
}
