"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { updateUserType } from "@/actions/getUserInfo";
import { useRouter } from "next/navigation";

export default function Component() {
  const [userType, setUserType] = useState("worker");
  const router = useRouter();
  async function onSubmit() {
    await updateUserType(userType);
    if (userType=='worker') {
      
      router.push("/profile");
    }else{
      
      router.push("/");
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md p-6 grid gap-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Select User Type</h2>
          <p className="text-muted-foreground">{`Current is ${userType}`}</p>
        </div>
        <div className="grid gap-4">
          <Button
            variant={userType === "worker" ? "" : "outline"}
            className="justify-start"
            onClick={() => setUserType("worker")}
          >
            <div className="flex items-center justify-between w-full">
              <span>Worker</span>
              <CheckIcon className="w-5 h-5 opacity-0" />
            </div>
          </Button>
          <Button
            variant={userType === "normal" ? "" : "outline"}
            className="justify-start"
            onClick={() => setUserType("normal")}
          >
            <div className="flex items-center justify-between w-full">
              <span>Normal</span>
              <CheckIcon className="w-5 h-5 opacity-0" />
            </div>
          </Button>
        </div>
        <Button onClick={onSubmit}>Submit</Button>
      </Card>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
