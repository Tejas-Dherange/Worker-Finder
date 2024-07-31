"use client";
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
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/actions/getUserInfo";
import { createProfile } from "@/actions/profileActions";
import ProfileEditInputs from "./ProfileEditInputs";

export default function ProfileEdit({ user, profile, setProfile }) {
  const [userData, setUserData] = useState(null);
  const [profilePic, setProfilePic] = useState("");
  // console.log(user?.email);

  async function postUserProfile() {
    const profileInfo = await createProfile(profile);
    console.log(profileInfo);
  }

  useEffect(() => {
    async function getUser() {
      const userInfo = await getUserInfo();
      // console.log(userInfo);
    }
    getUser();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const fields = [
    { id: "location", placeholder: "Enter your location" },
    { id: "phoneNo", placeholder: "Enter your phone number" },
    { id: "whatsApp", placeholder: "Enter your WhatsApp" },
    { id: "facebook", placeholder: "Enter your Facebook" },
    { id: "email", placeholder: "Enter your Email" },
    { id: "twitter", placeholder: "Enter your Twitter handle" },
    { id: "linkedin", placeholder: "Enter your LinkedIn profile" },
  ];

  const handleSubmit = () => {
    // Handle the save changes logic here
    console.log("Profile data saved:", profile);
  };

  return (
    <>
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

              <CldUploadWidget
                uploadPreset="workerFinder"
                onSuccess={(result) => {
                  console.log(result.info.url);
                }}
              >
                {({ open }) => {
                  return (
                    <Button variant="outline" onClick={() => open()}>
                      <UploadIcon className="h-4 w-4" />
                      <span>Change</span>
                    </Button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 py-6 sm:px-6">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>
              Update your profile information here.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={profile.name} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="profession">Your Profession</Label>
              <Input
                id="profession"
                value={profile.profession}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profile.bio}
                onChange={handleChange}
                placeholder="Tell us a little about yourself..."
                className="min-h-[100px]"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-6">
              {fields.map(({ id, placeholder }) => (
                <ProfileEditInputs
                  key={id}
                  id={id}
                  value={profile[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto" onClick={postUserProfile}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}

{
  /* <div className="grid gap-3">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  placeholder="Enter your website"
                  defaultValue="https://johndoe.com"
                />
              </div> */
}
function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
