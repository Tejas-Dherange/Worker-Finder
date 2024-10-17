"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignInWithGoogle from "@/components/SignInWithGoogle";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function page() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signIn("google", { callbackUrl: "/profile" });
    } catch (error) {
      setErrorMessage("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("User object is null");
      return;
    }

    if (!user.name || !user.email || !user.password) {
      console.error("One or more of the user fields is empty");
      return;
    }

    try {
      const res = await axios.post("/api/register", user);
      if (res.status !== 200 && res.status !== 201) {
        console.error("Failed to create user", res.data);
        return;
      }

      console.log("user added successfully");
      router.push("/login");
    } catch (error) {
      console.error("Failed to create user", error);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setUser({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <main>
      <section className="w-full  py-12 md:py-24 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Create an account
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enter your email and password to get started.
              </p>
            </div>
            <Card className="w-full max-w-md py-3 ">
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Ram"
                    value={user.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                  />
                </div>
                {errorMessage && <div className="text-red-600">{errorMessage}</div>}
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full  bg-green-600 hover:bg-green-800" onClick={handleSubmit}>
                  Sign Up
                </Button>
                {/* <Button className="mt-6 flex items-center justify-center w-64 bg-white text-black border border-gray-300"> */}
                {/* <ChromeIcon className="w-5 h-5 mr-2" /> */}

                <Button
                  onClick={handleGoogleSignIn}
                  className="flex justify-center  w-full gap-24 bg-blue-600 hover:bg-blue-800"
                  disabled={loading}
                >
                 <Image className={"bg-white ml-[-121px] rounded-sm "}  height={32} width={35} src={"/google.png"}/>
                 Sign in with Google
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
