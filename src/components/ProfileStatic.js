import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CldUploadWidget } from "next-cloudinary";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function ProfileStatic() {
  const fields = [
    "Location",
    "Phone No",
    "Whats App",
    "Facebook",
    "Email",
    "Twitter",
    "LinkedIn",
  ];
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 mx-auto max-w-[800px] mt-5">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 pt-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Profile Picture</Label>
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5 leading-none">
                <div className="font-semibold">John Doe</div>
                <div className="text-sm text-muted-foreground">@johndoe</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 py-6 sm:px-6">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>your profile information here.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <h3>Display Name</h3>
              <span className="border-2 rounded-sm p-1 min-h-[30px]">s</span>
            </div>
            <div className="grid gap-2">
              <h3>Profession</h3>
              <span className="border-2 rounded-sm p-1 min-h-[30px]"></span>
            </div>
            <div className="grid gap-2">
              <h3>Bio</h3>
              <span className="border-2 rounded-sm p-1 min-h-[100px]"></span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-6">
              {fields.map((field) => (
                <div className="grid gap-3" key={field}>
                  <h3>{field}</h3>
                  <span className="border-2 rounded-sm p-1 min-h-[30px]"></span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
